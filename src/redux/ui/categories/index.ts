import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

export const allToggledId = Symbol('All');

export type SymbolObject<T extends object = Record<any,any>, K = T[keyof T]> = {
    [key:string|number|symbol]:K
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {} as SymbolObject,
    reducers: {
        addCategory: (state, {payload: category}: PayloadAction<string>) =>{
            state[category] = false;
        },
        deleteCategory: (state, {payload: category}: PayloadAction<string>) =>{
            delete state[category];
        },
        updateCategory: (state, {payload: [oldCategory, newCategory]}: PayloadAction<[string, string]>) =>{
            delete Object.assign(state, {[newCategory]: state[oldCategory] })[oldCategory];
        },
        toggleCategory: (state, {payload: categories}: PayloadAction<SymbolObject>) =>{
            return categories;
        }
    },
    selectors: {
        getCategoriesState: (state) =>{
            return state;
        },
    }
})

export const getAllCategoriesUnchecked = createSelector(categoriesSlice.selectors.getCategoriesState, (categories) => {
    return Object.fromEntries(Object.entries(categories).map(([category, _]) => [category, false]))
})

export const getAllCategories = createSelector(categoriesSlice.selectors.getCategoriesState, (categories) => {
    return Object.keys(categories)
})

export const getAllCheckedCategories = createSelector(categoriesSlice.selectors.getCategoriesState, (categories) => {
    return Object.entries(categories).filter(([_, checked]) => checked).map(([category, _]) => category);
})

export const {
    getCategoriesState,
} = categoriesSlice.selectors;

export const {
    addCategory,
    deleteCategory,
    updateCategory,
    toggleCategory
} = categoriesSlice.actions;