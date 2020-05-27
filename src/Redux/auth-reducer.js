import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {

   id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                    ...state,
               ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setUserDataSuccess = (id, email, login) => {
    return {
        type: SET_USER_DATA, data: {id, email, login}
    };
}
export const setUserData = ()=>{
   return (dispatch)=>{
       usersAPI.getMyprofile()
           .then(response => {
               if (response.data.resultCode === 0) {
                   let {id, login, email} = response.data.data;
                   dispatch(setUserDataSuccess(id, email, login));
               }
           })
   }
}


export default authReducer;