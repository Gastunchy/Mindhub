import { createReducer } from "@reduxjs/toolkit";
import eventosAction from "../actions/eventosAction"

const initialState = []


const eventosReducer = createReducer(initialState, (builder) =>{

    return builder
    .addCase(eventosAction.get_eventos.fulfilled, (state, action)=>{
        let newState =  action.payload
        return newState
    })
})

export default eventosReducer