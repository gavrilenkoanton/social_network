import React from 'react';
import styles from './Profile.module.css'
import Posts from "./myposts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {
    debugger
    return (
        <div>
            <ProfileInfo />
            <Posts profilePage={props.profilePage}
                   // addPost={props.addPost}
                   // updateNewPostText={props.updateNewPostText}
                   dispatch={props.dispatch}
            />

        </div>
    );
}

export default Profile;
