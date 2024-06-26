/* Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/* Instruments */
const initialState: TMUserSliceState = null;

export const TMUserSlice = createSlice({
    name: 'TMUser',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setState: (state: TMUserSliceState, action: PayloadAction<TMUserSliceState>) => {
            state = action.payload;
            return state as PayloadAction | any;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
});

/* Types */
export type TMUserSliceState = {
    _id: string;
    account_id: string;
    username: string;
    dateOfBirth: string;
    imgSrc: string;
    userTag: string;
    createdAt: Date;
    updatedAt: Date;
} | null;

export * from './selector';
