import React from 'react';
import styles from './Profile.module.css'
import Posts from "./myposts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./myposts/PostsContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 6662;
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        // usersAPI.setProfileInfo(userId)
        //     .then(response => {
        //         this.props.setProfileInfo(response.data);
        //     })
        this.props.setProfileInfo(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};


export default compose(
    connect(mapStateToProps, {setProfileInfo}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)