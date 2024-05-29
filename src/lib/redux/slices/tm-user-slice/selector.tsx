import type { ReduxState } from '@/lib/redux';
import { TMUserSliceState } from '.';

export const selectTMUser = (state: ReduxState) => state.TMUser as TMUserSliceState;
