import React from 'react';
import styles from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
        <div>
            <div className={styles.image}><img
                src="https://www.thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg"
                alt=""/></div>
            <div className={styles.descriptionBlock}>ava+description</div>
        </div>


    );
}

export default ProfileInfo;
