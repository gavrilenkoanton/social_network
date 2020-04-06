import React from 'react';
import styles from './App.module.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {updateNewPostText} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <div className={styles.header}><Header/></div>
                <div className={styles.navbar}><Navbar state={props.state.messagesPage}/></div>
                <div className={styles.profile}>
                    <Route path='/' exact render={() => <Profile store={props.store}
                        // profilePage={props.state.profilePage}
                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                        //                                          dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile' render={() => <Profile store={props.store}
                        // profilePage={props.state.profilePage}

                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                        //                                           dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        store={props.store}
                        // messagePage={props.state.messagesPage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
