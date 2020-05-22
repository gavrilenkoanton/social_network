import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Redirect from "react-router-dom/es/Redirect";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialogsImg}><NavLink to={path}><img src={props.img}/>{props.name}</NavLink></div>
    )
};

const Message = (props) => {
    if (props.mesid === 1) {
        return <div className={styles.message1}>{props.message}</div>
    } else {
        return (
            <div className={styles.message2}>{props.message}</div>
        )
    }
};

function Dialogs(props) {


    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                                  img={dialog.img}/>);

    let messageElements = props.messagesPage.messagesData.map(message => <Message message={message.message}
                                                                                 id={message.id}
                                                                                 mesid={message.mesid}/>);
    let sendMessage = () => {
        // props.dispatch(sendMessageActionCreator())
        props.sendMessage()
    };

    let newText = (e) => {
        let newText = e.target.value;
        props.newText(newText)
        // props.dispatch(updateNewMessageTextActionCreator(newText))
    };

    if (!props.isAuth) return <Redirect to={'./login'}/>

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div className={styles.inputDialogs}>
                    <input type="text" onChange={newText} value={props.messagesPage.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
