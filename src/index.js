import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Myapp from './Myapp';
// import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/reducers/index'
const store = createStore(rootReducer)
console.warn("store data", store)

ReactDOM.render(
    <>
        <Provider store={store}>
            <Myapp />
        </Provider>
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();




