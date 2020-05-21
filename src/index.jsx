import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
// import store from './Redux/store.js'
import {Provider} from "react-redux";



    ReactDOM.render(
        <Provider store={store}>
        <App
            // state={store.getState()}
            //              store={store}

                         // addPost={store.addPost.bind(store)}
                         // updateNewPostText={store.updateNewPostText.bind(store)}


                         // dispatch={store.dispatch.bind(store)}
    />
        </Provider>, document.getElementById('root'))

// rerenderEntireTree(store.getState());

// store.subscribe(()=>{
//     let state = store.getState();
//     rerenderEntireTree(state)});

serviceWorker.unregister();
