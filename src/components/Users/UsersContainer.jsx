import React from "react";
import {connect} from "react-redux";
import usersReducer, {
    follow, getUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import preloader from './../../img/preloader.gif'
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.dataIsLoading(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     this.props.dataIsLoading(false);
        //     this.props.setUsers(response.items);
        //     this.props.setTotalCountOfUsers(response.totalCount);
        //
        // })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.dataIsLoading(true);
        // this.props.choosePage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
        //     this.props.dataIsLoading(false);
        //     this.props.setUsers(response.items);
        // })

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


// let mapDispatchToProps = (dispatch) => {
//     return {
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         choosePage: (pageNumber) => {
//             dispatch(choosePageAC(pageNumber))
//         },
//         setTotalCountOfUsers: (totalCount) => {
//             dispatch(setTotalCountOfUsersAC(totalCount))
//         },
//         dataIsLoading: (isLoading)=>{
//             dispatch(dataIsLoadingAC(isLoading))
//         },
//
//     }
// }



export default compose(
    connect(mapStateToProps, {
        unfollow, follow,
        // setUsersAC, choosePageAC,
        // setTotalCountOfUsersAC, dataIsLoadingAC,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)