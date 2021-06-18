// Root Reducer === Overall app state \\

// Function allows all reducers to be combined into root
import { combineReducers } from "redux";
// Reducer slices to combine 
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});