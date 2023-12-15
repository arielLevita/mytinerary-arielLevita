import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_comments = createAsyncThunk('get_comments', async () => {
    try {
        const response = await axios.get(`${apiUrl}/comments`)
        return {
            comments: response.data.comments
        }
    } catch (error) {
        console.log(error)
    }
})

export const getCommentsByItineraryId = createAsyncThunk('getCommentsByItineraryId', async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/comments?itineraryId=${id}`)
        if (!response.data || response.data.comments === undefined) {
            return {
                comments: []
            };
        }
        return {
            comments: response.data.comments
        }
    } catch (error) {
        console.log(error)
    }
})

export const getCommentById = createAsyncThunk('getCommentById', async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/comments/${id}`)
        return {
            comment: response.data
        }
    } catch (error) {
        console.log(error)
    }
})

export const addComment = createAsyncThunk('addComment', async (comment) => {
    try {
        const response = await axios.post(`${apiUrl}/comments`, comment);
        return {
            comment: response.data
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
});
