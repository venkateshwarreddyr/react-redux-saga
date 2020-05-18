
import { INCREMENT, DECREMENT } from './constraint';
const initialState = {
    counter: 0
}
export default (state = initialState, action) => {
    console.log("Inside reducer", {action})
    switch(action.type){
        case INCREMENT: return ({
            ...state,
            counter: state.counter + 1,
        })
        case DECREMENT: return ({
            ...state,
            counter: state.counter - 1,
        })
        default: return (state)
    }
}