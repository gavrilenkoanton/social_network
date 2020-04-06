import React from 'react';
import styles from './Profile.module.css'
import Posts from "./myposts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./myposts/PostsContainer";


function Profile(props) {
    debugger
    return (
        <div>
            <ProfileInfo />
            <PostsContainer store={props.store}
                // profilePage={props.profilePage}
                   // addPost={props.addPost}
                   // updateNewPostText={props.updateNewPostText}
                   // dispatch={props.dispatch}
            />

        </div>
    );
}

export default Profile;
