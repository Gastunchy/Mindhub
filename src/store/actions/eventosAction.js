import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_eventos = createAsyncThunk("get_eventos", async () => {
    try {
        let eventos = await axios
            .get("http://back.34.73.198.248.nip.io/api/eventos/")
            .then((response) => {

                return response.data.eventos;

            });
        return eventos;

    }
    catch (e) { console.log("Error" + e); }

})


const EventosAction = { get_eventos }
export default EventosAction
