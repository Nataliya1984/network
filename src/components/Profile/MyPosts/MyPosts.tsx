import React, {KeyboardEvent,ChangeEvent, useRef} from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { addPostAC, updateNewPostTextAC } from "../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";



export const MyPosts=(props: MyPostsPropsType)=> {

    //let state = props.store.getState().profilePage
    let state = props.profilePage

    let postsElement = state.post.map((p: any) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

   let addPost = () => {
    if(newPostElement.current){
      //let text = newPostElement.current.value ;
         props.addPost();

        //let action ={type:'ADD-POST', newPostText:props.newPostText}
        //props.store.dispatch(addPostAC(state.newPostText))
    }
   }


   let onChangeHandler= (e:ChangeEvent<HTMLTextAreaElement>) => {
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
                              onChange={onChangeHandler}
                              ref={newPostElement}
                              value={state.newPostText}></textarea>
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



