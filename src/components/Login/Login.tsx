import {LoginForm} from "./LoginForm";

export type LoginPropsType = {

}

export const Login = (props:LoginPropsType) => {
  return(
      <div>
        <h1>Login</h1>
        <LoginForm/>
      </div>
  )
}