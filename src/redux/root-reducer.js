// Function allows all reducers to be combined into root
import { combineReducers } from "redux";
// Persistence methods
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducer slices to combine 
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

// Configuration for persistence 
const persistConfig = {
    // Wnere in reducer should storage begin 
    key: 'root',
    // Import obj from lib
    storage,
    // Reducers wanted for storage 
    whitelist: ['cart']
}

// Keys represent state slices, value represents reducer for that slice
const rootReducer = combineReducers({
    // Handled by Firebase session, so no need for local storage as well 
    user: userReducer,
    // Stored in whitelist
    cart: cartReducer,
    directory: directoryReducer
});

// Persistence reducer obj 
export default persistReducer(persistConfig, rootReducer);