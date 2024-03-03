import { useEffect } from "react"

type Hook = (
    key: 'Escape',
    callback: () => void,
) => void

export const useKeyDownHandler : Hook = (key, callback) =>{
    useEffect(() =>{
        const onEscKeyDown = (event: KeyboardEvent) =>{
            if (event.key === key){
                event.preventDefault();
                callback();
            }
        }

        document.addEventListener('keydown', onEscKeyDown);

        return () =>{
            document.removeEventListener('keydown', onEscKeyDown)
        }
    }, [key, callback])
}