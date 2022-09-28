import changeTheNumber from './upDown'
import mulTheNumber from './mulDiv';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
 
     changeTheNumber,
     mulTheNumber
   
});
export default rootReducer;