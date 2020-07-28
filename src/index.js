import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore, compose , applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'
import { forbiddenWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(thunk, forbiddenWordsMiddleware, saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(
    app,
  document.getElementById('root')
);

