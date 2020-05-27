import React from "react";
import {connect} from "react-redux";
import usersReducer, {
    follow, getUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import preloader from './../../img/preloader.gif'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render = () => {
        return (
            <div>
                {this.props.dataIsLoad ? <img src={preloader}/>
                    : <Users
                        totalCountOfUsers={this.props.totalCountOfUsers}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />}
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountOfUsers: state.usersPage.totalCountOfUsers,
        currentPage: state.usersPage.currentPage,
        dataIsLoad: state.usersPage.dataIsLoad
    }
};

export default compose(
    connect(mapStateToProps, {
        unfollow, follow,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)