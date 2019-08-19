import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import './index.css';
import App from './components/App';
import counterApp from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(counterApp);
// eslint-disable-next-line no-undef
const appElement = document.getElementById('root');

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    appElement
);
serviceWorker.unregister();
