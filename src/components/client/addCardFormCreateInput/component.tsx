'use client'

import { ChangeEvent, FC, MouseEvent, ReactNode, useState } from 'react';
import { Input } from '../input/component';
import { Button } from '../button/component';
import PlusCircleIcon from '@public/plusCircleIcon.svg'

type Props = {
    value: string[];
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDelete: (id: number) => void;
    className?: string;
}

export const AddCardFormCreateInput: FC<Props> = ({value, id, onChange, onDelete, className}) => {
    const [counter, setCounter] = useState(value.length || 1);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const deleteInput = (event: MouseEvent<HTMLButtonElement>) =>{
        const button = (event.target as HTMLElement).closest('button');
        const input = button?.previousSibling as HTMLInputElement;
        const inputId = Number(input.id.split('_')[1]);

        onDelete(inputId);
        setCounter(counter - 1);
    }

    const createNewInput = () =>{
        const inputArray: ReactNode[] = [];
        
        for(let i = 0; i < counter; i++){
            inputArray.push(
                <Input id={id + '_' + i} type='text' value={value[i] || ''} onChange={onChange} onDelete={deleteInput} key={i}/>
            );
        }

        return inputArray;
    }

    return (
        <>
            <div className={className}>
                {createNewInput()}
            </div>
            <Button variant='Primary' onClick={increment}><PlusCircleIcon /></Button>
        </>
    )
}