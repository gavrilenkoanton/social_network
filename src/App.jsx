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


function App(props) {
debugger
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <div className={styles.header}><Header/></div>
                <div className={styles.navbar}><Navbar/></div>
                <div className={styles.profile}>
                    <Route path='/' exact render={()=> <Profile posts={props.posts}/>}/>
                    <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
