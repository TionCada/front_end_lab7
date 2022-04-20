const ADD_MESSAGE = 'ADD_MESSAGE';
const INITIALIZE_MESSAGES = 'INITIALIZE_MESSAGES';
const LOAD_MORE_MESSAGES = 'LOAD_MORE_MESSAGES';

let initialState = {
    messagesList: [
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesList: [...state.messagesList,
                    {
                        user: action.payload.user,
                        message: action.payload.message
                    }
                ]
            }
        case INITIALIZE_MESSAGES:
            return {
                ...state,
                messagesList: action.payload
            }
        case LOAD_MORE_MESSAGES:
            return {
                ...state,
                messages: []
            }
        default:
            return state;
    }
}

export const addMessage = (user, message) => {

    return {
        type: ADD_MESSAGE,
        payload: {user, message}
    }
}

export const initializeMessages = () => {

    const messagesList = JSON.parse(localStorage.getItem('messagesList')) || [];

    return {
        type: INITIALIZE_MESSAGES,
        payload: messagesList
    }
}

export const addMessageThunkCreator = (user, message) =>
    (dispatch, getState) => {

        const messagesList = getState().messagesInfo.messagesList;

        const expandedMessagesList = [...messagesList,
            {
                user: user,
                message: message
            }
        ];

        localStorage.setItem('messagesList', JSON.stringify(expandedMessagesList));

        dispatch(addMessage(user, message))
    }

export default usersReducer;