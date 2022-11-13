import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Massage/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPropsType} from "./DialogsContainer";
import { Navigate } from "react-router-dom";
import {useFormik} from "formik";


function Dialogs(props: DialogPropsType) {

    //let state = props.store.getState().dialogsPage
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map((m:any) => <Message key={m.id} message={m.message} id={m.id}/>);


    if (props.isAuth === false){
        return <Navigate to={'/login'}/>
    }
   // alert(props.isAuth)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                  {messagesElements}
                <AddMessageForm addMessag={props.addMessag} />

            </div>
        </div>
    )
}

export type AddMessageForm={
    addMessag:(newMessagText:string)=>void

}

type FormikErrorType ={
    newMessagText?:string
}

const validate = (values:any) => {
//debugger
    const errors:FormikErrorType = {};

    if (!values.newMessagText) {
       // debugger
        errors.newMessagText = 'Заполните поле ввода';
    } else if (values.newMessagText.length < 5) {
       // debugger
        errors.newMessagText = 'сообщение должно быть не менее 5 символов';
    } else if (values.newMessagText.length >30){
        errors.newMessagText = 'сообщение не должно превышать 30 символов'
    }

    return errors;
};

const AddMessageForm = (props:AddMessageForm) => {


    const formik = useFormik({
        initialValues: {
            newMessagText: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
            props.addMessag(values.newMessagText)
            console.log(JSON.stringify(values))
        },
    });

  return(
      <form onSubmit={formik.handleSubmit}>
          <div>
              <label htmlFor="textarea">Напишите сообщение:</label>
              <br/>
                    <textarea  style={{outline:'none'}}
                              // ref={newDialogsElement}
                              // value={props.state.newMessagText}
                              // onChange={onChangeHandler}
                             // onKeyPress={onKeyPressHandler}


                              // name="newMessagText"
                              // onChange={formik.handleChange}
                              // value={formik.values.newMessagText}
                              //  onBlur={formik.handleBlur}
                        // сокращаем с помощью getFieldProps
                               placeholder={'Enter your message'}
                               {...formik.getFieldProps('newMessagText')}
                    />

              {formik.touched.newMessagText && formik.errors.newMessagText ? <div style={{color:'red'}}>{formik.errors.newMessagText}</div> : null}
          </div>
          <div>
              <button type="submit">Add post</button>
              {/*<button  onClick={addMessag}>Add post</button>*/}
          </div>
      </form>
  )
}

export default Dialogs;