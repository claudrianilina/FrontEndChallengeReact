import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import { State, state } from './reducers';
import { httpMiddleware } from './middleware';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    reduxThunk,
    httpMiddleware
];
export const store: Store<State> = createStore(
    state,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);