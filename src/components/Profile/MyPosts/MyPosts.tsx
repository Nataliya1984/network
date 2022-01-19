import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


function  MyPosts() {
    return (
            <div className={classes.content}>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

    )
}

export default MyPosts;