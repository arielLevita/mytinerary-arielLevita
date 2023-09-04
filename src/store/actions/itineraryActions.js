import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itineraries = createAsyncThunk('get_itineraries', async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/itineraries')
        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
})

export const getItinerariesByCityId = createAsyncThunk('getItinerariesByCityId', async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/itineraries?cityId=${id}`)
        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
})

export const getItineraryById = createAsyncThunk('getItineraryById', async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/itineraries/${id}`)
        return {
            itinerary: response.data
        }
    } catch (error) {
        console.log(error)
    }
})
