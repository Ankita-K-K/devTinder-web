import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connections",
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnection: (state, action) => null,
    }
});

export const  {addConnections, removeConnection} = connectionSlice.actions;
export default connectionSlice.reducer;