import React from 'react';
import styles from './Posts.module.css'
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


function    Posts(props) {

    let newPostElement =React.createRef();

    let addPost = ()=>{
        // props.dispatch(addPostActionCreator())
        props.addPost()
    };

    let newText = ()=>{
        let text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(text))
        props.updateNewPostText(text)
    };

    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return (
        <div className={styles.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" ref={newPostElement}
                              onChange={newText}
                              value={props.profilePage.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>send post</button>
                </div>

            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default Posts;
