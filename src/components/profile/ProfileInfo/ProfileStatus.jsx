import React from 'react';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div>Статус:</div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || "____________"}</span>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
