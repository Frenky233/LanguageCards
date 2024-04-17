import { Card } from "@/db/db.modal";
import { RootState } from "@/redux";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const currentCardsSlice = createSlice({
    name: 'currentCards',
    initialState: [] as Card[],
    reducers:{
        addCard: (state, {payload: card}: PayloadAction<Card>) =>{
            if(!card.categories.length){
                card.categories = ['All*'];
            }
            
            state.push(card);
        },
        deleteCard: (state, {payload: card}: PayloadAction<Card>) =>{
            state.splice(state.indexOf(card), 1);
        },
        editCard: (state, {payload: {card, id}}: PayloadAction<{card: Card, id: number}>) =>{
            if(!card.categories.length){
                card.categories = ['All*'];
            }
            
            state[id] = card;
        },
        updateAllCards: (state, {payload: cards}: PayloadAction<Card[]>) =>{
            return cards;
        }
    },
    selectors:{
        getCards: (state) => {
            return state;
        },
        getRandomCard: (state, lastId) =>{
            const getRandom = () => Math.floor(Math.random() * state.length);
            let number = getRandom();
            
            if(state.length === 0) return null;

            if(state.length > 1) while(state[number].id === lastId) number = getRandom();

            return state[number];
        },
        getCardsAmount: (state) =>{
            return state.length;
        }
    }
})

export const {
    addCard,
    deleteCard,
    editCard,
    updateAllCards
} = currentCardsSlice.actions

export const {
    getCards,
    getRandomCard,
    getCardsAmount
} = currentCardsSlice.selectors