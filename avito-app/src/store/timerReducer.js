const defaultState = {
    time: 0
}


export const timerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TIME':
            return {...state, time: state.time + action.payload }

        case 'GET_TIME':
            return {...state, time: state.time - action.payload }

        default:
            return state
    }
}