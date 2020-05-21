import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT_OF_USERS = 'SET_TOTAL_COUNT_OF_USERS';
const LOADING_DATA = 'LOADING_DATA';

let initialState = {

    users: [],
    totalCountOfUsers: 20,
    pageSize: 5,
    currentPage: 1,
    dataIsLoad: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_TOTAL_COUNT_OF_USERS:
            return {
                ...state,
                totalCountOfUsers: action.totalCount
            };
        case LOADING_DATA:
            return {
                ...state,
                dataIsLoad: action.isLoading
            };

        default:
            return state;
    }
};

export const followSuccess = userID => ({type: FOLLOW, userID: userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID: userID})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const choosePage = (pageNumber) => ({type: SET_PAGE, pageNumber})
export const setTotalCountOfUsers = (totalCount) => ({type: SET_TOTAL_COUNT_OF_USERS, totalCount})
export const dataIsLoading = (isLoading) => ({type: LOADING_DATA, isLoading})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        dispatch(choosePage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(dataIsLoading(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCountOfUsers(response.totalCount));
        })
    }
}
export const follow = (userId)=>{
    return (dispatch)=>{
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }

            })
    }
}
export const unfollow = (userId)=>{
    return (dispatch)=>{
        usersAPI.unfollow(userId)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }

            })
    }
}
export default usersReducer;