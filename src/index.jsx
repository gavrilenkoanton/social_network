import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'


let rerenderEntireTree =()=> {
    ReactDOM.render(<App state={store.getState()}
                         store={store}

                         // addPost={store.addPost.bind(store)}
                         // updateNewPostText={store.updateNewPostText.bind(store)}
                         dispatch={store.dispatch.bind(store)}
    />, document.getElementById('root'))
};
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)});

serviceWorker.unregister();
