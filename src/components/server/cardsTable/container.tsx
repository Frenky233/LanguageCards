import { cookies } from 'next/headers';
import { FC } from 'react';
import { CardsTableComponent } from './component';
import { CardsTableClientContainer } from '@/components/client/cardsTableClient/container';

type Props = {
    className?: string;
}

export const CardsTableContainer: FC<Props> = ({className}) => {
    const currentUser = cookies().get('currentUser');

    if(!currentUser){
        return <CardsTableClientContainer />;
    }
    
    //Fetch cards here

    return (
        <CardsTableComponent cards={[]} className={className}/>
    );
}