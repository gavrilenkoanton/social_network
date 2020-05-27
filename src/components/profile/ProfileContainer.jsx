import React from 'react';
import styles from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setProfileInfo, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 6662;
        }
        this.props.setProfileInfo(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};


export default compose(
    connect(mapStateToProps, {setProfileInfo, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)