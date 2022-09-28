import { INCREMENT,DECREMENT } from "../actions/types";
const initialState = 0;
const changeTheNumber = ( state = initialState,actions) => {
    console.log(actions.payload)
    switch(actions.type){
        case INCREMENT : return state + actions.payload;

        case DECREMENT : return state - actions.payload;
        default: return state;
    }
}
export default changeTheNumber;