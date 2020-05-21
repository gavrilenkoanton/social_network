import React from 'react';
import styles from './Posts.module.css'
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

//
// function PostsContainer(props) {
//
//     // let newPostElement = React.createRef();
//
//     let state = props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     };
//
//     let newText = (text) => {
//         // let text = newPostElement.current.value;
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     };
//
//     // let postElements = props.store.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
//
//
//     return (
//         <div>
//             <Posts updateNewPostText={newText} addPost={addPost} profilePage={state.profilePage}/>
//         </div>
//     );
// }


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
};

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;
