import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";


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
    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'./login'}/>

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.inputDialogs}>
                <Field component={"textarea"} name="newMessageBody" placeholder="Enter you message"/>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
