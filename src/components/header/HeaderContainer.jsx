import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setUserData()
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
