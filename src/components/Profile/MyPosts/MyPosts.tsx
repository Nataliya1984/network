import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


function  MyPosts(props:any) {
    return (
            <div className={classes.content}>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message={'Hi, how are you?'} likesCount={5}/>
                <Post message={"It's my first post"} likesCount={4}/>
            </div>

    )
}

export default MyPosts;