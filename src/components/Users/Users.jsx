import React from "react";
import styles from "./Users.module.css"
import photo from "./../../img/user.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCountOfUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={styles.wrapper}>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                            className={props.currentPage === p ? styles.currentPage :
                                <styles className="othersPages"/>}>{p}</span>
                    )
                })}
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.preview}>
                            <div className={styles.photo}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : photo} alt=""/>
                                </NavLink>
                            </div>
                            {u.followed === true
                                ? <button onClick={() => {
                                    props.unfollow(u.id)


                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={styles.userDescription}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"Minsk"}</div>
                                <div>{"Belarus"}</div>
                            </div>
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Users