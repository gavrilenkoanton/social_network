import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div><NavLink to={path}>{props.name}</NavLink></div>
    )
};

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

function Dialogs() {
    let dialogsData = [
        {id: 1, name: 'Тоха'},
        {id: 2, name: 'Марина'},
        {id: 3, name: 'Андрей'},
        {id: 4, name: 'Жора'},
        {id: 5, name: 'Вася'},
        {id: 6, name: 'Виктор'},
    ];

    let messagesData = [
        {id: 1, message: 'еуеу, мазафака'},
        {id: 2, message: 'хау а ю дуинг?'},
        {id: 3, message: 'вери из май факинг мани?'},
    ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = messagesData.map(message => <Message message={message.message} id={message.id}/>);

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;
