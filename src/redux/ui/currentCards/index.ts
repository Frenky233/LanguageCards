import { Card } from "@/db/db.modal";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    getCards
} = currentCardsSlice.selectors