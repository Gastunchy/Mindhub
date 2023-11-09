import { configureStore } from "@reduxjs/toolkit";
import eventosReducer from "./reducers/eventosReducer";

export const store = configureStore({
    reducer:{
        eventos: eventosReducer
    }
})
