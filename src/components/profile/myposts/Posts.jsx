import React from 'react';
import styles from './Posts.module.css'
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormControl";

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

const maxLength10 = maxLengthCreator(10);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostBody"} placeholder={"Enter your post"}
                   validate={[required, maxLength10]}/>
            <button>send post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: "dialogAddPostForm"})(AddPostForm)
export default Posts;
