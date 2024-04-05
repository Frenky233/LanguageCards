import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";
import { addCard, deleteCard, editCard } from "../ui/currentCards";
import { db } from "@/db/db.modal";

const addCardToDB: Middleware<{}, RootState> = ({ getState }) => next => async action =>{
    if(addCard.match(action)) {
        const currentCategories = Object.entries(getState().categories).filter((([_, checked]) => checked)).map(([category, _]) => category);

        if(!action.payload.categories.length){
            action.payload.categories = ['All*'];
        }

        await db.cards.add(action.payload);

        if(action.payload.categories.some(item => currentCategories.includes(item))){
            return next(action);       
        }

        return;
    }

    return next(action);
}

const deleteCardInDB: Middleware<{}, RootState> = ({ getState }) => next => async action =>{
    if(deleteCard.match(action)){
        await db.cards.delete(action.payload.id!);
    }

    return next(action)
}

const updateCardInDB: Middleware<{}, RootState> = ({ getState }) => next => async action =>{
    if(editCard.match(action)){
        if(!action.payload.card.categories.length){
            action.payload.card.categories = ['All*'];
        }

        await db.cards.update(action.payload.id, action.payload.card);

        if(getState().currentCards.includes(action.payload.card)) return next(action);

        return;
    }

    return next(action);
}

export const cardMiddleware: Middleware[] = [
    addCardToDB,
    deleteCardInDB,
    updateCardInDB,
]