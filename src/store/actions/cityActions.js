import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get(`${apiUrl}/cities`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error)
    }
})

export const getCityById = createAsyncThunk('getCityById', async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/cities/${id}`)
        return {
            city: response.data
        }
    } catch (error) {
        console.log(error)
    }
})

export const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
    try {
        const response = await axios.get(`${apiUrl}/cities?name=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        return {
            cities: []
        }
    }
})