
import Template from "../components/Template";
import login from '../assets/login.png'

function Login(props){
    return(
        <div>
            <Template
            title="Welcome Back"
            desc1="Build Skills for today, tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={login}
            formType="login"
            setLoggedIn={props.setLoggedIn}
            />
        </div>
    )

}
export default Login;