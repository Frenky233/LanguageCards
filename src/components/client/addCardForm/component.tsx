'use client'

import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { Input } from '../input/component';
import { useAddCardForm } from './useAddCardForm';
import { AddCardFormCreateInput } from '../addCardFormCreateInput/component';
import { Button } from '../button/component';
import { AddCardFormField } from '../addCardFormField/component';
import { CategorySelectorContainer } from '../categorySelector/container';

type Props = {
    onSubmit: (form: {word: string, translations: string[], pronunciation: string, categories: Record<string, boolean>}) => void;
    initialState: {
        word: string;
        translations: string[];
        pronunciation: string;
        categories: Record<string, boolean>
        id?: number;
    };
}

export const AddCardForm: FC<Props> = ({onSubmit, initialState}) => {
    const {form, setWord, setTranslations, setPronunciation, setCategories} = useAddCardForm(initialState);

    if(Object.keys(form.categories).length !== Object.keys(initialState.categories).length){
        form.categories = {
            ...initialState.categories,
            ...form.categories
        }
    }

    const onClick = () =>{
        onSubmit(form);
    }

    return (
        <form className={styles.form}>
            <h3>Add new Card</h3>
            <AddCardFormField title='Word'>
                <Input id='word' type='text' value={form.word} onChange={setWord} />
            </AddCardFormField>
            <AddCardFormField title='Translation'>
                <AddCardFormCreateInput id='translation' value={form.translations} onChange={setTranslations} className={styles.translationsHolder}/>
            </AddCardFormField>
            <AddCardFormField title='Pronunciation'>
                <Input id='pronunciation' type='text' value={form.pronunciation} onChange={setPronunciation} />
            </AddCardFormField>
            <AddCardFormField title='Categories'>
                <CategorySelectorContainer categories={form.categories} onChange={setCategories}/>
            </AddCardFormField>
            <Button onClick={onClick} variant='Push' type='button' disabled={!(form.word && form.translations.some(item => item))}>Save</Button>
        </form>
    );
}