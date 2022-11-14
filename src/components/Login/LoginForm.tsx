import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {setIsLoggedInTC} from "../redux/auth-reducer";
import {LoginParamsType} from "../../api/api";




export type LoginFormPropsType = {

}

//пишем типизацию для ошибок

type FormikErrorType={
    email?: string
    password?: string
    rememberMe?: boolean

}

const validate = (values:any) => {
    const errors:FormikErrorType = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};



export const LoginForm = (props: LoginFormPropsType) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: (values) => {
            //debugger
            dispatch(setIsLoggedInTC(values))
            alert(JSON.stringify(values));
            formik.resetForm()
        }
    })
//debugger


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label >Email</label>
                <input placeholder={'email'}
                       // name="email"
                       // onChange={formik.handleChange}
                       // value={formik.values.email}
                       // onBlur={formik.handleBlur}

                       {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}

            </div>
            <div>
                <label>Password</label>
                <input placeholder={'Password'}
                       // name="password"
                       // onChange={formik.handleChange}
                       // value={formik.values.password}
                       // onBlur={formik.handleBlur}

                       {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div>
                <input
                    type={'checkbox'}
                    // name="rememberMe"
                    // onChange={formik.handleChange}
                    // checked={formik.values.rememberMe}
                    // onBlur={formik.handleBlur}

                    {...formik.getFieldProps('rememberMe')}
                />
                remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>

    )
}