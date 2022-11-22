type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    newMessagText?: string
    newPostText?:string
}

export const validate = (values: any) => {

    const errors: FormikErrorType = {};

    if (!values.newMessagText) {
        errors.newMessagText = 'Required';
    } else if (values.newMessagText.length < 1) {
        errors.newMessagText = 'Заполните поле ввода';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'пароль должен быть более 3 символов';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.newPostText) {
        errors.newPostText = 'Заполните поле ввода';
    } else if (values.newPostText.length < 5) {
        errors.newPostText = 'сообщение должно быть не менее 5 символов';
    }

    return errors;
};