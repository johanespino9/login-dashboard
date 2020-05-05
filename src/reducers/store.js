import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import userReducer, { restoreSessionAction } from './userDuck'
import thunk from 'redux-thunk';
import charsReducer, { getCharactersAction } from './characters';

const rootReducer = combineReducers({
  //  user: userReducer,
  characters: charsReducer,
});

export default function generateStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  getCharactersAction()(store.dispatch, store.getState);
  //   restoreSessionAction()(store.dispatch);

  return store;
}
