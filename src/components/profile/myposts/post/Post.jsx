import React from 'react';
import styles from './Post.module.css'


function Post(props) {
    return (
        <div className={styles.post}>
            <img
                src="https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3266-6236-4266-b833-393539393436__cat-3601092_1280.jpg"
                alt=""/>
            {props.message}
            <br/>
            <span>likes: </span>{props.likesCount}
        </div>
    );
}

export default Post;
