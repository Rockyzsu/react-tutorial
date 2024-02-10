const reducer = (state, action) => {
    switch (action.type) {
        case 'user/update':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }

}

export default reducer;
