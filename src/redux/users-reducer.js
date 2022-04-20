const ADD_USER = 'ADD_USER';

let initialState = {
    currentUser: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export const addNewUser = (userName) => {

    sessionStorage.setItem('currentUser', userName);

    return {
        type: ADD_USER,
        payload: userName
    }
}

export const getCurrentUser = () => {

    const currentUser = sessionStorage.getItem('currentUser') || null;

    return {
        type: ADD_USER,
        payload: currentUser
    }
}

export default usersReducer;