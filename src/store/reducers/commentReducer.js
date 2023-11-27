import { createReducer } from "@reduxjs/toolkit";
import { get_comments, getCommentsByItineraryId, getCommentById, addComment } from "../actions/commentActions";

const initialState = {
    comments: [],
    comment: []
}
const commentReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_comments.fulfilled, (state, action) => {
        return {
            ...state,
            comments: action.payload.comments || []
        }
    })
    .addCase(getCommentsByItineraryId.fulfilled, (state, action) => {
        return {
            ...state,
            comments: action.payload.comments || []
        }
    })
    .addCase(getCommentById.fulfilled, (state, action) => {
        return {
            ...state,
            comment: action.payload.comment.comment || null
            };
        } 
    )
    .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload.comment);
    })
)

export default commentReducer;