import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

function LoginForm(props){
    const [formData,setFromData]=useState({
        email:'',password:''
    })
    const navigate=useNavigate()
    const [showpassword,setShowPassword]=useState(false)
    function changeHandler(e){
        setFromData((prev)=>({...prev,[e.target.name]:e.target.value}))

    }
    function submitHandler(e){
        e.preventDefault();
        props.setLoggedIn(true);
        toast.success("Logged in");
        navigate('/dashboard')

    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full text-white">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
           
            <input type="email"
            required
            placeholder="Enter email id"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="w-full text-black rounded-[0.5rem] p-[12px]"
            />
             </label>
             <label className="w-full text-white relative ">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup></p>
           
            <input type={showpassword?("text"):("password")}
            required
            placeholder="Enter Password"
            value={formData.password}
            onChange={changeHandler}
            name="password"
            className="text-black rounded-[0.5rem] p-[12px] w-full"
            />
            <span 
            className="absolute right-3 top-[38px] text-black cursor-pointer"
            onClick={()=>{setShowPassword(!showpassword)}}>
                {showpassword ? (<AiOutlineEyeInvisible fontSize={24} />) :(<AiOutlineEye fontSize={24} />)}
            </span>
           
             </label>
             <Link to="#"><p className="text-xs mt-1 text-white ml-auto max-w-max">forgot password?</p></Link>
             <button className="bg-yellow-500 rounded-[8px] font-medium px-[12px] py-[8px] mt-4">Sign In</button>
        </form>
    )

}

export default LoginForm;