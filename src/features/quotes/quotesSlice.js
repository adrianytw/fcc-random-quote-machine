import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        text: 'Q',
        author: 'A'
    }
];

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {}
});

export const selectAllQuotes = (state) => state.quotes;

export default quotesSlice.reducer