import type { ReduxState } from '@/lib/redux';

export const selectMode = (state: ReduxState) => state.theme.mode;
