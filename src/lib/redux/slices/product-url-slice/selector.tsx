import type { ReduxState } from '@/lib/redux';

export const selectUrl = (state: ReduxState) => state.productUrl.url;
