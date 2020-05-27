import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Пусть это будет мой первый пост', likesCount: 10},
        {id: 2, message: 'Пусть это будет мой второй пост)', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostBody, likesCount: 0}]
            };
            case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setProfileInfoSuccess = (profile) => ({ type: SET_PROFILE_INFO, profile});
export const setUserStatusSuccess = (status) => ({ type: SET_USER_STATUS, status});

export const setProfileInfo = (userId)=>{
    return (dispatch)=>{
        usersAPI.setProfileInfo(userId)
            .then(response => {
                dispatch(setProfileInfoSuccess(response.data));
            })
    }
}
export const getUserStatus = (userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatusSuccess(response.data));
            })
    }
}
export const updateUserStatus = (status)=>{
    return (dispatch)=>{
        debugger
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setUserStatusSuccess(status));
                }
            })
    }
}

export default profileReducer;