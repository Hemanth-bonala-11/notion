
import Template from "../components/Template";
import signup from '../assets/signup.png'

function Signup(props){
    return(
        <div >
            <Template 
            title="Join the millions learning to code with study notion for free"
            desc1="Build Skills for today, tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={signup}
            formType="signup"
            setLoggedIn={props.setLoggedIn}
            />
        </div>
    )

}

export default Signup;