import React from "react";
import './Post.module.css';
import classes from './Post.module.css'


export type PostPropsType = {
    message: string,
    likesCount: number,
    id: number,
}

const Post=React.memo((props: PostPropsType)=> {

    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src='https://socialvk.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
})

export default Post;