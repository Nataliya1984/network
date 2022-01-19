import React from "react";
import './Post.module.css';
import classes from './Post.module.css'


function Post() {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src='https://socialvk.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;