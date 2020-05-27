import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

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
        addPost: (newPostBody)=>{
            dispatch(addPostActionCreator(newPostBody))
        }
    }
};

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;
