'use client'

import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';

export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}