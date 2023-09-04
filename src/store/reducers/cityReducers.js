import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities, getCityById } from "../actions/cityActions";

const initialState = {
    cities: [],
    city: []
}
const cityReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_cities.fulfilled, (state, action) => {
        return {
            ...state,
            cities: action.payload.cities
        }
    })
    .addCase(getCityById.fulfilled, (state, action) => {
        return {
            ...state,
            city: action.payload.city.city
        };
            } 
        )
        .addCase(filter_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
)

export default cityReducer;