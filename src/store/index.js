import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {createReducer} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	cash: createReducer,
	customers: customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
