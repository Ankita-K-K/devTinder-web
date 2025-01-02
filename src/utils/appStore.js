import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice.js';
import feedReducer from './slices/feedSlice.js';
import connectionReducer from './slices/connectionSlice.js';
import requestReducer from './slices/requestsSlice.js';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connection: connectionReducer,
        requests: requestReducer
    }
});
export default appStore;