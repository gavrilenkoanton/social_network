import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./myposts/PostsContainer";

function Profile(props) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
