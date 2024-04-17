'use client'

import React, { FC, useEffect, useRef } from 'react';
import { CardAnswerFormComponent } from './component';

type Props = {
    getNextCard?: () => void;
    answer?: string[];
    submitAnswerToDB?: (isCorrect: boolean) => void;
    className?: string;
}

export const CardAnswerFormContainer: FC<Props> = ({className, answer, submitAnswerToDB, getNextCard}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const updateAnswerForm = () =>{
        textareaRef.current?.removeAttribute('readOnly');
        textareaRef.current?.removeAttribute('data-correct');
        textareaRef.current!.value = '';
        buttonRef.current?.removeAttribute('disabled');
    }

    const getNextCardWrapper = async() =>{
        getNextCard!();
        await new Promise(r => setTimeout(r, 700));
        updateAnswerForm();
    }
    
    const checkAnswer = (value: string) =>{
        const card = document.getElementById('card'); 

        if(!card) return;

        const correct = answer?.some(item => item.toLowerCase() == value.toLowerCase())!;
        card.dataset.correct = String(correct);
                
        buttonRef.current!.disabled = true;
        textareaRef.current!.readOnly = true;
        textareaRef.current!.dataset.correct = String(correct);
        submitAnswerToDB!(correct);
    }

    const onSubmit = async(event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        checkAnswer(textareaRef.current?.value!);
    }

    useEffect(() => {
        const submitOnEnter = (event: KeyboardEvent) =>{
            if(document.getElementById('card')!.dataset.swipe === 'true') return;

            if(event.key === 'Enter' && !event.shiftKey){
                event.preventDefault();

                if(buttonRef.current!.disabled){
                    getNextCardWrapper();
                    return;
                }

                checkAnswer(textareaRef.current?.value!)
            }
        }

        document.addEventListener('keydown', submitOnEnter);

        return () =>{
            document.removeEventListener('keydown', submitOnEnter);
        }
    }, [answer])
    
    return <CardAnswerFormComponent getNextCard={getNextCardWrapper} submitButtonRef={buttonRef} textareaRef={textareaRef} onSubmit={onSubmit} className={className}/>;
}