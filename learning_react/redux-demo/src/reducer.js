// 应该这里的state要初始化
let initState = {user:'Ken'}
const reducer = (state = initState, action) => {
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
