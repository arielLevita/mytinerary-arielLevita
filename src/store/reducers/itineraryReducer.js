import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries, getItinerariesByCityId, getItineraryById } from "../actions/itineraryActions";

const initialState = {
    itineraries: [],
    itinerary: []
}
const itineraryReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_itineraries.fulfilled, (state, action) => {
        return {
            ...state,
            itineraries: action.payload.itineraries
        }
    })
    .addCase(getItinerariesByCityId.fulfilled, (state, action) => {
        return {
            ...state,
            itineraries: action.payload.itineraries
        }
    })
    .addCase(getItineraryById.fulfilled, (state, action) => {
        return {
            ...state,
            itinerary: action.payload.itinerary.itinerary
            };
        } 
    )
)

export default itineraryReducer;