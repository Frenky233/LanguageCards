import { useCallback, useReducer } from "react";

type InitialState = {
    word: string;
    translations: string[];
    pronunciation: string;
    categories: Record<string, boolean>
}

const INITIAL_STATE: InitialState= {
    word: '',
    translations: [],
    pronunciation: '',
    categories: {}
}

type StateT = typeof INITIAL_STATE;
type ActionT = {
    type: 'setWord' | 'setTranslations'| 'deleteTranslation' | 'setPronunciation' | 'setCategories';
    payload: string | boolean;
    id?: number | string;
}

const reducer = (state : StateT, {type, payload, id}: ActionT) : StateT=>{
    switch (type){
        case 'setWord':
            return{
                ...state,
                word: payload as string
            };
        case 'setPronunciation':
            return{
                ...state,
                pronunciation: payload as string
            }
        case 'setCategories' :
            state.categories[id as string] = payload as boolean;
            return{
                ...state,
            }
        case 'setTranslations' :
            state.translations[id as number] = payload as string;
            return{
                ...state,
            }
        case 'deleteTranslation':
            state.translations.splice(id as number, 1);
            return{
                ...state
            }
        default: 
            return state
    }
}


type Hook = (initialState?: typeof INITIAL_STATE) => {
    form: typeof INITIAL_STATE;
    deleteTranslation: (id: number) => void;
} & {
    [Property in keyof StateT as `set${Capitalize<Property>}`] : (event : React.ChangeEvent<HTMLInputElement>) => void;
} 

export const useAddCardForm: Hook = (initialState = INITIAL_STATE) =>{
    const [form, dispatch] = useReducer(reducer, initialState);

    const setWord = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setWord", payload: event.target.value})
    }, []);

    const setPronunciation = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setPronunciation", payload: event.target.value})
    }, [])

    const setCategories = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        const payload: boolean = event.target.checked ? true : false;

        dispatch({type: "setCategories", payload: payload, id: event.target.value})
    }, []);

    const setTranslations = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setTranslations", payload: event.target.value, id: Number(event.target.id.split('_')[1])})
    }, [])

    const deleteTranslation = useCallback((id: number) =>{
        dispatch({type: "deleteTranslation", payload: '', id: id})
    }, [])

    return {
        form,
        setWord,
        setPronunciation,
        setCategories,
        setTranslations,
        deleteTranslation
    }
}