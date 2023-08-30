import { createAction } from "@reduxjs/toolkit";

export const user_photo = createAction(
    'user_photo',
    (obj) => ({
        payload: {
            photo: obj.photo,
        }
    })
);
