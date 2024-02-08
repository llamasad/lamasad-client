import type { ReduxState } from '@/lib/redux';
export const selectLanguage = (state: ReduxState) => state.language.type;
