import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import cityReducer from "./reducers/cityReducers";
import itineraryReducer from "./reducers/itineraryReducer";
import likeReducer from "./reducers/likeReducer";

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer,
        likeReducer: likeReducer
    }
})