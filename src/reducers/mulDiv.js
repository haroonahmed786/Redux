import { MULT,DIVIDE } from "../actions/types";
const initialState = 5;
const mulTheNumber = ( state = initialState,actions) => {
    switch(actions.type){
        case MULT : return state * actions.payload;

        case DIVIDE : return state / actions.payload;
        default: return state;
    }
}
export default mulTheNumber;