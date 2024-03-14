import { FC } from 'react';
import { CategorySelectorComponent } from './component';

type Props = {
    categories: Record<string, boolean>
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategorySelectorContainer: FC<Props> = ({categories, onChange}) => {
    const amount = Object.entries(categories).reduce((acc, [_, checked]) => {
        if(checked) {
            return acc+= 1;
        }
        return acc;
    }, 0)


    return (
        <>
            <CategorySelectorComponent categories={categories} title={`${amount} Selected`} onChange={onChange}/>
        </>
    );
}