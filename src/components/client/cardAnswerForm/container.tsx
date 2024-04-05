'use client'

import React, { FC, useEffect, useRef } from 'react';
import { CardAnswerFormComponent } from './component';

type Props = {
    getNextCard?: () => void;
    answer?: string[];
    className?: string;
}

export const CardAnswerFormContainer: FC<Props> = ({className, answer, getNextCard}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null)

    const checkAnswer = (value: string) =>{
        const card = document.getElementById('card'); 

        if(!card) return;

        const correct = answer?.some(item => item.toLowerCase() == value.toLowerCase())!;
        card.dataset.correct = String(correct);
                
        buttonRef.current!.disabled = true;
        textareaRef.current!.readOnly = true;
        textareaRef.current!.dataset.correct = String(correct);
    }

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        checkAnswer(textareaRef.current?.value!);
    }

    useEffect(() => {
        const submitOnEnter = (event: KeyboardEvent) =>{
            if(document.getElementById('card')!.dataset.swipe === 'true') return;

            if(event.key === 'Enter' && !event.shiftKey){
                event.preventDefault();

                if(buttonRef.current!.disabled){
                    getNextCard!();
                    return;
                }

                checkAnswer(textareaRef.current?.value!)
            }
        }

        document.addEventListener('keydown', submitOnEnter);

        return () =>{
            document.removeEventListener('keydown', submitOnEnter);
        }
    }, [])
    
    return <CardAnswerFormComponent getNextCard={getNextCard!} submitButtonRef={buttonRef} textareaRef={textareaRef} onSubmit={onSubmit} className={className}/>;
}