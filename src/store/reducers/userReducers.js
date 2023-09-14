import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_signin, user_token, user_logout, user_signup, user_google } from "../actions/userActions";

const initialState = {
    user: null,
    token: null,
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_signin.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }
        })
        .addCase(user_google, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signup.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }
        })
        .addCase(user_logout, () => {
            return {
                user: null,
                token: null
            }
        })
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
)

export default userReducer;