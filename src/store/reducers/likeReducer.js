const initialState = {
    liked: false,
    likeCount: 0
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LIKE':
            return {
                ...state,
                liked: !state.liked,
                likeCount: state.liked ? state.likeCount - 1 : state.likeCount + 1,
            };
        default:
            return state;
    }
};

export default likeReducer;