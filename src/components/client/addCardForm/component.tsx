'use client'

import { FC, useCallback } from 'react';
import styles from './styles.module.scss';
import { Input } from '../input/component';
import { useAddCardForm } from './useAddCardForm';
import { AddCardFormCreateInput } from '../addCardFormCreateInput/component';
import { Button } from '../button/component';
import { AddCardFormField } from '../addCardFormField/component';
import { db } from '@/db/db.modal';
import { SelectContainer } from '../select/container';
import { CategorySelectorContainer } from '../categorySelector/container';

export const AddCardForm: FC = ({}) => {
    const {form, setWord, setTranslations, setPronunciation, setCategories} = useAddCardForm();

    console.log(form);

    const onSubmit = useCallback(async () =>{
        try{
            const categories = Object.entries(form.categories).map(([name, checked]) => {
                if(checked) return name;
            }).filter(name => name) as string[];

            const formSubmit = {
                word: form.word,
                translations: form.translations,
                pronunciation: form.pronunciation,
                categories: categories
            }

            await db.cards.add(formSubmit);
        } catch (e) {
            console.log(e);
        }
    }, [form])

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
            <Button onClick={onSubmit} variant='Push' type='button'>Save</Button>
        </form>
    );
}