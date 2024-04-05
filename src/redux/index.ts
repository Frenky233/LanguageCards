import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./ui/categories";
import { categoryMiddleware, lastSavedCategories } from "./middleware/categoryMiddleware";
import { currentCardsSlice } from "./ui/currentCards";
import { cardMiddleware } from "./middleware/cardMiddleware";

export const store = configureStore({
    reducer: combineSlices(categoriesSlice, currentCardsSlice),
    preloadedState: {
        categories: lastSavedCategories(),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(categoryMiddleware)
        .concat(cardMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;