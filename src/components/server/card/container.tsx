import { FC } from 'react';
import { CardComponent } from './component';
import { cookies } from 'next/headers';
import { CardClientContainer } from '@/components/client/cardClient/container';

export const CardContainer: FC = ({}) => {
    const currentUser = cookies().get('currentUser');

    if(!currentUser){
        return (
            <CardClientContainer />
        )
    }

    //TODO: fetch card here

    return (
        <>
            <CardComponent title='test' pronunciation='test' /> 
        </>
    ); 
}