import { createReducer } from "@reduxjs/toolkit";
import { user_photo } from "../actions/userActions";

const initialState = {
    name: 'Ariel',
    photo: 'https://i.postimg.cc/d38HCtFp/IMG-20191225-013617178-edited.jpg',
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)

export default userReducer;