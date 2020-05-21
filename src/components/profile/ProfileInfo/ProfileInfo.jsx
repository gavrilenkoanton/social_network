import React from 'react';
import styles from './ProfileInfo.module.css'
import preloader from "../../../img/preloader.gif";



function ProfileInfo(props) {

    if(!props.profile){
        return  <img src={preloader} />
    }


    return (
        <div>
            <div className={styles.image}><img
                src="https://www.thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg"
                alt=""/></div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div className={styles.fullName}>
                    {props.profile.fullName}
                </div>
                <div>
                    О себе: {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob ? "Ищу работу" : "Работаю"}
                </div>
                <div>
                    {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : ""}
                </div>
                ava+description</div>
        </div>


    );
}

export default ProfileInfo;
