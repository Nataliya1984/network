import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts(props: any) {
    return (
        <div className={classes.content}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you?'} likesCount={5}/>
                <Post message={"It's my first post"} likesCount={4}/>
            </div>
        </div>

    )
}

export default MyPosts;