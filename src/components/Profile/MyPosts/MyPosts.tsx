import React, {KeyboardEvent,ChangeEvent, useRef} from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../redux/state";
import {text} from "stream/consumers";


type MyPostsPropsType = {
    state: Array<PostType>
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

function MyPosts(props: MyPostsPropsType) {


    let postsElement = props.state.map((p: any) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

   let addPost = () => {
    if(newPostElement.current){
        let text = newPostElement.current.value ;
        props.addPost();
    }
   }


   let onChengeHandler= (e:ChangeEvent<HTMLTextAreaElement>) => {
       if(newPostElement.current){
           let text = newPostElement.current.value;
           props.updateNewPostText(text)
           console.log(text)
       }
   }

   let onKeyPressHandler=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
       e.key === 'Enter' && addPost()
   }

    return (
        <div className={classes.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onKeyPress={onKeyPressHandler}
                              onChange={onChengeHandler}
                              ref={newPostElement}
                              value={props.newPostText}></textarea>
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

