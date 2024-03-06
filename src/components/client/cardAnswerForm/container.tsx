'use client'

import { FC, useCallback, useState } from 'react';
import { CardAnswerFormComponent } from './component';

type Props = {
    className?: string;
}

export const CardAnswerFormContainer: FC<Props> = ({className}) => {
    const [answer, setAnswer] = useState('');

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setAnswer(event.target.value);
    }, []);
    
    return (
        <>
            <CardAnswerFormComponent value={answer} onChange={onChange} className={className}/>
        </>
    );
}