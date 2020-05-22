import React from 'react';
// import styles from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;
//     return (
//         <div className={styles.dialogsImg}><NavLink to={path}><img src={props.img}/>{props.name}</NavLink></div>
//     )
// };
//
// const Message = (props) => {
//     if (props.mesid === 1) {
//         return <div className={styles.message1}>{props.message}</div>
//     } else {
//         return (
//             <div className={styles.message2}>{props.message}</div>
//         )
//     }
// };

// function DialogsContainer(props) {

    //
    // let dialogsElements = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
    //                                                                               img={dialog.img}/>);
    //
    // let messageElements = props.messagePage.messagesData.map(message => <Message message={message.message}
    //                                                                              id={message.id}
    //                                                                              mesid={message.mesid}/>);

//     let state = props.store.getState().messagesPage;
//
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     };
//
//     let newText = (newText) => {
//         // let newText = e.target.value;
//
//         props.store.dispatch(updateNewMessageTextActionCreator(newText))
//     };
//
//
//     return <Dialogs sendMessage={sendMessage} newText={newText} state={state}/>
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        newText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        },
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator())
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)