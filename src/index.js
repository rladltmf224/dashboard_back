import React from 'react';
import ReactDOM from 'react-dom';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
//axios를 import시켜서,,

import App from './components/App';

import config from './config';
//환경설정 import시켜주고,,

import createRootReducer from './reducers';

import { doInit } from './actions/auth';
import { createHashHistory } from 'history';
// import Browser from './images/sidebar/Outline/Browser';
import { BrowserRouter } from 'react-router-dom';

const history = createHashHistory();

export function getHistory() {
  return history;
}

axios.defaults.baseURL = config.baseURLApi; //요청을 보낼 기본 url을 설정하는 것
axios.defaults.headers.common['Content-Type'] = "application/json"; // json형식으로 요청을 보내도록 설정
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

export const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      ReduxThunk
    ),
  )
);

store.dispatch(doInit());


ReactDOM.render(

    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

//내가 browser router추가한거야,, 드론 메인페이지 때문에

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();