import React from 'react';
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
// import {updateNewPostText} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <div className={styles.header}><HeaderContainer /></div>
                <div className={styles.navbar}>
                    <Navbar
                    // state={props.state.messagesPage}
                    //     store={props.store}
                    state = {props.messagesPage}                /></div>
                <div className={styles.profile}>
                    <Route path='/' exact render={() => <ProfileContainer
                        // store={props.store}
                        // profilePage={props.state.profilePage}
                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                        //                                          dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer
                        // store={props.store}
                        // profilePage={props.state.profilePage}

                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                        //                                           dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        // store={props.store}
                        // messagePage={props.state.messagesPage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={()=> <UsersContainer/>}/>
                    <Route path='/login' render={()=> <LoginPage/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

const mstp = (state)=> {
    return {
        messagesPage: state.messagesPage
    }
}


export default connect(mstp, {})(App);
