import React from 'react';
import styles from './Posts.module.css'
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";

function Posts(props) {

    let addPost = (values) => {
        props.addPost(values.newPostBody)
    };


    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={styles.postsBlock}>
            <h3>my posts</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}


let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter your post"}/>
            <button>send post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: "dialogAddPostForm"})(AddPostForm)
export default Posts;
