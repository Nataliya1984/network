import React, {KeyboardEvent, ChangeEvent, useRef} from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC} from "../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import {Navigate} from "react-router-dom";


export const MyPosts = (props: MyPostsPropsType) => {

    //let state = props.store.getState().profilePage
    let state = props.profilePage

    let postsElement = state.post.map((p: any) => <Post key={p.id} id={p.id} message={p.message}
                                                        likesCount={p.likesCount}/>);

    if (props.isAuth === false){
        return <Navigate to={'/login'}/>
    }


    return (
        <div className={classes.content}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addPost={props.addPost}/>

            </div>
            <div className={classes.posts}>

                {
                    postsElement
                }

            </div>
        </div>

    )
}


//1. выносим в отдельную компоненту нашу форму

type AddPostFormType = {
    addPost: (newPostText: string) => void
}

type FormikErrorType = {
    newPostText?: string
}

const validate = (values: any) => {

    const errors: FormikErrorType = {};

    if (!values.newPostText) {
        errors.newPostText = 'Заполните поле ввода';
    } else if (values.newPostText.length < 5) {
        errors.newPostText = 'сообщение должно быть не менее 5 символов';
    } else if (values.newPostText.length > 30) {
        errors.newPostText = 'сообщение не должно певышать 30 символов';
    }


    return errors;
};

const AddPostForm = (props: AddPostFormType) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        // 2. onSubmit, когда форма соберет наши данные, форма вызовет колбэк который мы ей передадим, назовем его addPost, и в этот колбэк прийдут values
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
            props.addPost(values.newPostText)
            // console.log(JSON.stringify(values))
        },
    });
    return (

        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="textarea">Напишите сообщение:</label>
            <br/>

            <textarea style={{outline: 'none'}}
                      // name="newPostText"
                      // onChange={formik.handleChange}
                      // value={formik.values.newPostText}
                      // onBlur={formik.handleBlur}
                        placeholder={'Enter your message'}
                      {...formik.getFieldProps('newPostText')}
            />

            {formik.touched.newPostText && formik.errors.newPostText ?
                <div style={{color: 'red'}}>{formik.errors.newPostText}</div> : null}
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

//3 форма засобмитится, к нам прийдет values, в values будет сидеть newPostText и мы его передаем в addPost

//4 добовляем пост из контейнерной компоненты


