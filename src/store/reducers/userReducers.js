import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_signin, user_token, user_logout } from "../actions/userActions";

const initialState = {
    // name: 'default',
    // photo: 'https://i.postimg.cc/yN3xNK4z/default-avatar.png',
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