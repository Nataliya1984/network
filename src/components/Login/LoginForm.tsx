import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {setIsLoggedInTC} from "../redux/auth-reducer";

export type LoginFormPropsType = {}

export const LoginForm = (props: LoginFormPropsType) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(setIsLoggedInTC(values))
            alert(JSON.stringify(values));
        }
    })
//debugger
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName">Email</label>
                <input placeholder={'email'}
                       name="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}/>
            </div>
            <div>
                <label htmlFor="firstName">Password</label>
                <input placeholder={'Password'}
                       name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}/>
            </div>
            <div>
                <input
                    type={'checkbox'}
                    name="rememberMe"
                    onChange={formik.handleChange}
                    //value={formik.values.rememberMe}
                />
                remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>

    )
}