'use client'

import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";
import { SymbolObject, addCategory, allToggledId, deleteCategory, toggleCategory, updateCategory } from "../ui/categories";
import { db } from "@/db/db.modal";
import { editCard, updateAllCards } from "../ui/currentCards";

export const lastSavedCategories = () =>{
    if(typeof window === 'undefined') return;
    if(localStorage.getItem('categories') === null) return {};

    const allCategories: string[] = JSON.parse(localStorage.getItem('categories') as string);
    const state: SymbolObject = Object.fromEntries(allCategories.map(item => [item, false]))

    if(localStorage.getItem('lastCategories') !== null){
        const lastCategories: string[] = JSON.parse(localStorage.getItem('lastCategories') as string);

        lastCategories.forEach(item => state[item] = true);

        if(localStorage.getItem('allToggled') !== null){
            const isAllToggled: boolean = JSON.parse(localStorage.getItem('allToggled') as string)

            state[allToggledId] = isAllToggled;
        }

        return state;
    }

    return state;
};

const addCategoryToLocalStorage: Middleware<{}, RootState> = ({getState}) => next => action =>{
    if(addCategory.match(action)){
        if(Object.keys(getState().categories).filter(item => item.toLowerCase() === action.payload.toLowerCase()).length > 0){
            throw `${action.payload} already exists`;
        }
        const categories = Object.keys(getState().categories);
        categories.push(action.payload);

        localStorage.setItem('categories', JSON.stringify(categories));
    }

    return next(action);
}

const deleteCategoryInLocalStorage: Middleware<{} , RootState> = ({getState}) => next => action =>{
    const result = next(action);

    if(deleteCategory.match(action)){
        const stateKeys = Object.keys(getState().categories);
        stateKeys.splice(stateKeys.indexOf(action.payload), 1);
        localStorage.setItem('categories', JSON.stringify(stateKeys));
    }

    return result;
}

const toggleCategoryMiddleware: Middleware<{}, RootState> = ({getState, dispatch}) => next => async action =>{
    if(typeof window === 'undefined') return;

    const result = next(action);
    
    if(toggleCategory.match(action)){
        const categories = Object.entries(getState().categories).filter(([_, checked]) => checked).map(([category, _]) => category);

        localStorage.setItem('lastCategories', JSON.stringify(categories));
        
        action.payload[allToggledId] ? localStorage.setItem('allToggled', 'true') : localStorage.setItem('allToggled', 'false');

        const cards = action.payload[allToggledId] ? await db.cards.toArray() : await db.cards.where('categories').anyOf(categories).toArray();

        dispatch(updateAllCards(cards));
    }

    return result;
}

const updateCategoryMiddleware: Middleware<{}, RootState> = ({getState, dispatch}) => next => async action =>{
    const result = next(action);
    
    if(updateCategory.match(action)){
        const categories = Object.keys(getState().categories);
        const [oldCategory, newCategory] = action.payload;

        localStorage.setItem('categories', JSON.stringify(categories));

        const lastCategories: string[] = JSON.parse(localStorage.getItem('lastCategories') as string);
        if(lastCategories.includes(oldCategory)){
            localStorage.setItem('lastCategories', JSON.stringify(categories));
        }

        const cardsToUpdate = await db.cards.where('categories').equals(oldCategory).toArray();

        for (const card of cardsToUpdate){
            card.categories[card.categories.indexOf(oldCategory)] = newCategory;
            
            dispatch(editCard({
                card,
                id: card.id!,
            }));
        }
    }

    return result;
}

const deleteCategoryMiddleware: Middleware<{}, RootState> = ({getState, dispatch}) => next => async action =>{
    const result = next(action);
    
    if(deleteCategory.match(action)){
        const categories = Object.keys(getState().categories);
        const category = action.payload;

        localStorage.setItem('categories', JSON.stringify(categories));

        const lastCategories: string[] = JSON.parse(localStorage.getItem('lastCategories') as string);
        if(lastCategories.includes(category)){
            localStorage.setItem('lastCategories', JSON.stringify(categories));
        }

        const cardsToUpdate = await db.cards.where('categories').equals(category).toArray();

        for (const card of cardsToUpdate){
            card.categories.splice(card.categories.indexOf(category), 1)

            dispatch(editCard({
                card,
                id: card.id!,
            }));
        }
    }

    return result;
}

export const categoryMiddleware: Middleware[] = [
    addCategoryToLocalStorage,
    deleteCategoryInLocalStorage,
    toggleCategoryMiddleware,
    updateCategoryMiddleware,
    deleteCategoryMiddleware
]