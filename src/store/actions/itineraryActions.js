import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_itineraries = createAsyncThunk('get_itineraries', async () => {
    try {
        const response = await axios.get(`${apiUrl}/itineraries`)
        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
})

export const getItinerariesByCityId = createAsyncThunk('getItinerariesByCityId', async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/itineraries?cityId=${id}`)
        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
})

export const getItineraryById = createAsyncThunk('getItineraryById', async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/itineraries/${id}`)
        return {
            itinerary: response.data
        }
    } catch (error) {
        console.log(error)
    }
})
