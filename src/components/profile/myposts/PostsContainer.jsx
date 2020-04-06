import React from 'react';
import styles from './Posts.module.css'
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";


function PostsContainer(props) {

    // let newPostElement = React.createRef();
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let newText = (text) => {
        // let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    // let postElements = props.store.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    return (
        <div>
            <Posts updateNewPostText={newText} addPost={addPost} profilePage={state.profilePage}/>
        </div>
    );
}

export default PostsContainer;
