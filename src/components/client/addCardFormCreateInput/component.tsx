'use client'

import { ChangeEvent, FC, ReactNode, useState } from 'react';
import { Input } from '../input/component';
import { Button } from '../button/component';
import PlusCircleIcon from '@public/plusCircleIcon.svg'

type Props = {
    value: string[];
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string;
}

export const AddCardFormCreateInput: FC<Props> = ({value, id, onChange, className}) => {
    const [counter, setCounter] = useState(1);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const createNewInput = () =>{
        const inputArray: ReactNode[] = [];
        
        for(let i = 1; i < counter; i++){
            inputArray.push(
                <Input id={id + '_' + i} type='text' value={value[i] || ''} onChange={onChange} key={i}/>
            );
        }

        return inputArray;
    }

    return (
        <>
            <div className={className}>
                {value.map(item => <Input key={item} id='translation_0' type='text' value={item || ''} onChange={onChange} />)}
                {createNewInput()}
            </div>
            <Button variant='Primary' onClick={increment}><PlusCircleIcon /></Button>
        </>
    )
}