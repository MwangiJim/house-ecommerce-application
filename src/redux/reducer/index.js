import { combineReducers } from "redux";
import { ProductReducer } from "./reducer";

export const reducer = combineReducers({
    realestateReducer:ProductReducer
})