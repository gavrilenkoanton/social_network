import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.navBarFriends}><NavLink to={path}><img src={props.img}/>{props.name}</NavLink></div>
    )
};

function Navbar(props) {
    let bestFriendsTop3= props.state.dialogsData.slice(0,3);
    let bestFriends = bestFriendsTop3.map(dialog => <Friends name={dialog.name} id={dialog.id} img={dialog.img}/>);


    return (
        <div className={styles.navBarStyles}>
            <div><NavLink to="/profile" activeClassName={styles.active}> Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={styles.active}> Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={styles.active}> Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={styles.active}> Settings</NavLink></div>
            <div> </div>
            <div><NavLink to="/friends" activeClassName={styles.active}> Friends {bestFriends}</NavLink></div>


        </div>
    );
}

export default Navbar;
