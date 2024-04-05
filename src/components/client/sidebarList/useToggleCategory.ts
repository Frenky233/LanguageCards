import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { SymbolObject, toggleCategory } from "@/redux/ui/categories";
import { allToggledId } from "@/redux/ui/categories";

const INITIAL_STATE: SymbolObject = {}

type StateT = typeof INITIAL_STATE;
type ActionT = {
    id: string;
    payload: boolean;
}

const reducer = (state : StateT, {id, payload}: ActionT): StateT =>{
    return {
        ...state,
        [id]: payload
    }
}

type Hook = (initialState?: typeof INITIAL_STATE) => {
    form: typeof INITIAL_STATE;
    isAllToggled: boolean;
    toggleLocalCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
    toggleLocalAllCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
} 

export const useToggleCategory: Hook = (initialState = INITIAL_STATE) =>{
    const [form, dispatch] = useReducer(reducer, initialState);
    const [isAllToggled, setIsAllToggled] = useState(initialState[allToggledId]);
    const [update, setUpdate] = useState(false);
    const dispatchRedux = useDispatch();
    
    const toggleLocalCategory = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const payload: boolean = event.target.checked ? true : false;
        
        dispatch({id: event.target.value, payload})
    }

    const toggleLocalAllCategory = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const payload: boolean = event.target.checked ? true : false;

        setIsAllToggled(payload);
    }

    const onSubmit = () => {
        dispatchRedux(toggleCategory({
            ...form,
            [allToggledId]: isAllToggled
        }));
        setUpdate(!update);
    }

    return {
        form,
        isAllToggled,
        toggleLocalCategory,
        toggleLocalAllCategory,
        onSubmit
    };
}