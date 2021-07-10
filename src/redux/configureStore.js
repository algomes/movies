import { applyMiddleware, compose } from "redux";

import ReduxThunk from 'redux-thunk';
import { createStore } from 'redux';
import rootReducer from "./reducers";

const middlewares = [ReduxThunk];

const initialState = {}

const composeEnhancers = window.__REX_DEV_TOOLS_EXTENSIONS_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}
