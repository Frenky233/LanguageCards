import { useEffect } from "react"

type Hook =(
    id: string,
    callback: () => void,
 ) => void

export const useClickHandler: Hook = (id, callback) =>{
    useEffect(() => {
        const onClickOutside = (event : Event) =>{
            if(!event.target) return;
            if((event.target as HTMLElement).id === id){
                callback();
            }
        }

        document.addEventListener('pointerdown', onClickOutside);

        return () =>{
            document.removeEventListener('pointerdown', onClickOutside)
        }
    },[id, callback])
} 