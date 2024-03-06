import { FC } from 'react';
import { CardComponent } from './component';

export const CardContainer: FC = ({}) => {
    //TODO: get data from indexedDB or server
    

    return (
        <>
            <CardComponent title='test' pronunciation='test' /> 
        </>
    ); 
}