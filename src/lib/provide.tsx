'use client';

/* Core */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
/* Instruments */
import { reduxStore, persistor } from './redux';
import { useEffect } from 'react';

export const Providers = (props: React.PropsWithChildren) => {
    return (
        <Provider store={reduxStore}>
            <PersistGate loading="NULL" persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};
