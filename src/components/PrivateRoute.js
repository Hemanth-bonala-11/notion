import { useNavigate,Navigate } from "react-router";

function PrivateRoute(props){
    const navigate=useNavigate()
    if(props.isLoggedIn){
        return props.children
    }
    else{
        // navigate("/login")
        // or we can use Navigate tag to redirect
        return <Navigate to="/login"/>
    }

}

export default PrivateRoute;