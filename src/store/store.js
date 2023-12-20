import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import cityReducer from "./reducers/cityReducers";
import commentReducer from "./reducers/commentReducer";
import itineraryReducer from "./reducers/itineraryReducer";
import likeReducer from "./reducers/likeReducer";

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer,
        commentReducer: commentReducer,
        itineraryReducer: itineraryReducer,
        likeReducer: likeReducer
    }
})