import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';


let initialState = {
    posts: [
        {id: 1, message: 'Пусть это будет мой первый пост', likesCount: 10},
        {id: 2, message: 'Пусть это будет мой второй пост)', likesCount: 11}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            };
        case ADD_POST:
            // let stateCopy = {...state};
            // stateCopy.posts=[...state.posts];
            // stateCopy.posts.push({id: 3, message: state.newPostText, likesCount: 0});
            // stateCopy.newPostText = '';
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setProfileInfoSuccess = (profile) => ({ type: SET_PROFILE_INFO, profile});

export const setProfileInfo = (userId)=>{
    return (dispatch)=>{
        usersAPI.setProfileInfo(userId)
            .then(response => {
                dispatch(setProfileInfoSuccess(response.data));
            })
    }

}

export default profileReducer;