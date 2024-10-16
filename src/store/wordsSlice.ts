import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import { fetchWords as fetchWordsAPI } from '../utils/api';
import {WordsState, Word} from "../types";

const initialState: WordsState = {
    words: [],
    loading: false,
    error: null,
};


export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
    const data = await fetchWordsAPI();
    return data as Word[];
});

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWords.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWords.fulfilled, (state, action: PayloadAction<Word[]>) => {
                state.loading = false;
                state.words = action.payload;
            })
            .addCase(fetchWords.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Не удалось загрузить слова';
            });
    },
});

export default wordsSlice.reducer;
