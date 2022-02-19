import React, {useRef} from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../redux/state";
import {text} from "stream/consumers";


type MyPastsPropsType = {
    state: Array<PostType>
    addPost:(postMessage:string)=>void
}

function MyPosts(props: any) {

    let postsElement = props.state.post.map((p: any) => <Post id={p.id} message={p.message} likesCount={p.lekesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

   let addPost = () => {
    let text = newPostElement.current?.value;
       props.addPost(text);
       console.log(text)
   }

   let onChengeHandler= () => {

   }

    return (
        <div className={classes.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChengeHandler} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick= {addPost} >Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {
                    postsElement
                }

            </div>
        </div>

    )
}

export default MyPosts;

// const ref = useRef(null);
// <input ref={ref}></input>
// Ну и дальше ref.current.value ...
// (createRef выдает ошибку -(0.0)-