import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./service"

export const findItemsThunk = createAsyncThunk(
    'items/findItems', async () =>
        await service.findItems()
)