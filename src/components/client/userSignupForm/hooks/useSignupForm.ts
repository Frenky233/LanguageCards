import { useCallback, useReducer } from "react";

const INITIAL_STATE= {
    user: '',
    email: '',
    password: ''
}

type StateT = typeof INITIAL_STATE;
type ActionT = {
    type: 'setUser' | 'setPassword' | 'setEmail';
    payload: string
}

const reducer = (state : StateT, {type, payload}: ActionT) =>{
    switch (type){
        case 'setEmail':
            return{
                ...state,
                email: payload
            }
        case 'setUser':
            return{
                ...state,
                user: payload
            };
        case 'setPassword':
            return{
                ...state,
                password: payload
            }
        default: 
            return state
    }
}

type Hook = (initialState?: typeof INITIAL_STATE) => {
    form: typeof INITIAL_STATE,
    setUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

export const useSignupForm: Hook = (initialState = INITIAL_STATE) =>{
    const [form, dispatch] = useReducer(reducer, initialState);

    const setUser = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setUser", payload: event.target.value})
    }, []);

    const setEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setEmail", payload: event.target.value})
    }, []);

    const setPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "setPassword", payload: event.target.value})
    }, [])

    return {
        form,
        setUser,
        setEmail,
        setPassword
    }
}