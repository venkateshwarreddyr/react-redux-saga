import { INCREMENT, DECREMENT, DECREMENT_VALUE, INCREMENT_VALUE } from './constraint';

export const increment = () =>  {
    //api call
    console.log('increment');
    return({type: INCREMENT});
}
export const decrement = () => {
    //api call
    console.log('decrement');
    return({type: DECREMENT});
}
export const incrementValue = () =>  {
    //api call
    console.log('increment');
    return({type: INCREMENT_VALUE});
}
export const decrementValue = () => {
    //api call
    console.log('decrement');
    return({type: DECREMENT_VALUE});
}