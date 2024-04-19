import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./service"

export const findItemsThunk = createAsyncThunk(
    'items/findItems', async () =>
        await service.findItems()
)

export const createItemThunk = createAsyncThunk(
    'items/createItem',
    async (item) => {
        console.log("In thunk")
        console.log(item)
        return await service.createItem(item)
    }
);
