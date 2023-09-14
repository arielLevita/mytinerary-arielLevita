import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user_photo = createAction(
    'user_photo',
    (obj) => ({
        payload: {
            photo: obj.photo,
        }
    })
);

export const user_signin = createAsyncThunk(
    'user_signin',
    async (obj) => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            return {
                user: data.response.user,
                token: data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
);

export const user_google = createAsyncThunk(
    'user_google',
    async (obj) => {
        const data = obj.data ? obj.data : obj
        if (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            window.location.reload();
            return {
                user: data.user,
                token: data.token
            }
        }
        return {
            user: null
        }
    })

export const user_signup = createAsyncThunk(
    'user_signup',
    async (obj) => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/auth/signup', obj.data)

            return {
                user: data.response.user,
                token: data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
);

export const user_token = createAction(
    'user_token',
    (user) => {
        return {
            payload: {
                user
            }
        }
    })

export const user_logout = createAction(
    'user_logout',
    async (token) => {
        try {
            localStorage.getItem('token')

            await axios.post('http://localhost:3000/api/auth/signout', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            return {
                user: null,
                token: null
            }
        } catch (error) {
            console.log(error);
        }
    }
)
