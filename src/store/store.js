import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import cityReducer from "./reducers/cityReducers";
import commentReducer from "./reducers/commentReducer";
import itineraryReducer from "./reducers/itineraryReducer";
import likeReducer from "./reducers/likeReducer";

/* This code is creating a Redux store using the `configureStore` function from the `@reduxjs/toolkit`
library. The store is configured with multiple reducers, which are combined into a single reducer
object using the object literal syntax. */
export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer,
        commentReducer: commentReducer,
        itineraryReducer: itineraryReducer,
        likeReducer: likeReducer
    }
})