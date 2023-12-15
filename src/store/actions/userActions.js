import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import apiUrl from "../../api";

export const get_users = createAsyncThunk('get_users', async () => {
    try {
        const response = await axios.get(`${apiUrl}/users`)
        return {
            users: response.data.users
        }
    } catch (error) {
        console.log(error)
    }
})

export const user_signin = createAsyncThunk(
    'user_signin',
    async (obj) => {
        try {
            const { data } = await axios.post(`${apiUrl}/auth/signin`, obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))
            return {
                user: data.response.user,
                token: data.response.token
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
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
            const { data } = await axios.post(`${apiUrl}/auth/signup`, obj.data)
            Swal.fire({
                icon: 'success',
                title: 'Great!',
                text: 'User registered!',
                footer: '<a href="/signin">Please click here to SignIn</a>'
            })
            return {
                user: data.response.user,
                token: data.response.token
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
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
            await axios.post(`${apiUrl}/auth/signout`, {}, {
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
