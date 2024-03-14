import { useCallback, useState } from "react";

type Hook = () => {
    value: string;
    setSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSearchBarInput: Hook = () => {
    const [value, setValue] = useState('');

    const setSearchQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    },[])

    return {
        value,
        setSearchQuery,
    }
}