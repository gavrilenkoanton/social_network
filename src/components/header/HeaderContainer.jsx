import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setUserData()
        // usersAPI.getMyprofile()
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //     //     {withCredentials: true})
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, login, email} = response.data.data;
        //             this.props.setUserData(id, email, login);
        //         }
        //     })
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);