import { persistReducer } from 'redux-persist';
import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { themeSlice } from './slices/theme-slice';
import { languageSlice } from './slices/language-slice';
import { productUrlSlice } from './slices/product-url-slice';
import { TMUserSlice } from './slices/tm-user-slice';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { type ThemeSliceState } from './slices/theme-slice';
const persistCommonConfig = {
    storage: storage,
};
const themePersistConfig = {
    ...persistCommonConfig,
    key: 'theme',
};
const languagePersistConfig = {
    ...persistCommonConfig,
    key: 'language',
};
const themePersistedReducer = persistReducer(themePersistConfig, themeSlice.reducer);
const languagePersistedReducer = persistReducer(languagePersistConfig, languageSlice.reducer);
const rootReducer = combineReducers({
    theme: themePersistedReducer,
    language: languagePersistedReducer,
    productUrl: productUrlSlice.reducer,
    TMUser: TMUserSlice.reducer,
});
export default rootReducer;
