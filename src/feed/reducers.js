import { createSlice } from "@reduxjs/toolkit";
import {findItemsThunk} from "./thunks";


const initialState = {
    items: [],
    loading: false
}

const itemSlice = createSlice({
        name: 'items',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(findItemsThunk.pending, (state) => {
                state.loading = true
                state.items = []
            })
            .addCase(findItemsThunk.fulfilled, (state, {payload}) => {
                state.loading = false
                state.items = payload
            })
            .addCase(findItemsThunk.rejected, (state) => {
                state.loading = false
                state.items = []
            })
        }
    }
)

export default itemSlice.reducer;