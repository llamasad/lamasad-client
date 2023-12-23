/* Core */
import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux';
import { persistStore } from 'redux-persist';
/* Instruments */
import reducer from './rootReducer';
import { middleware } from './middleware';

export const reduxStore = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middleware);
    },
});
export const persistor = persistStore(reduxStore);
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;
