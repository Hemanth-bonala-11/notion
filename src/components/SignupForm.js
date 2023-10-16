import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { useNavigate } from "react-router";

function SignupForm(props){
    const navigate=useNavigate()

    const [formData,setFromData]=useState({
        firstName:'',lastName:'',email:'',password:'',confirmPassword:''
    })
    function changeHandler(e){
        setFromData((prev)=>({...prev,[e.target.name]:e.target.value}))


    }
    function submitHandler(e){
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("passwords doesnot match");
            
        }
        else{
            const finalData={
                ...formData,
                "accountType":accountType
            }
            toast.success("Account Created");
            props.setLoggedIn(true);
            console.log(finalData);
            navigate("/dashboard")
            
            
        }
    }
    const [showpassword,setShowPassword]=useState(false);
    const [showConfirmpassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]=useState("student");
    // console.log(accountType);
    return(
        <div>
            <div className="text-white flex  bg-white p-1 gap-x-1  my-6 rounded-full max-w-max">
                <button onClick={()=>{setAccountType("student")}}
                className={`${accountType==="student" ?
                 "bg-black text-white" : 
                 "bg-white text-black" } py-2 px-5 rounded-full transition-all duration-200`}
                >student</button>
                <button onClick={()=>{setAccountType("instructor")}}
                className={`${accountType==="instructor" ?
                "bg-black text-white" : 
                "bg-white text-black" } py-2 px-5 rounded-full transition-all duration-200`}
                >Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4">
                <label className="w-full text-white">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">first name<sup className="text-pink-200">*</sup></p>
                    <input 
                    type="text"
                    required
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    className="w-full text-black rounded-[0.5rem] p-[12px]"
                    />
                </label>
                <label className="w-full text-white">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">last name<sup className="text-pink-200">*</sup></p>
                    <input 
                    type="text"
                    required
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter your Last Name"
                    value={formData.lastName}
                    className="w-full text-black rounded-[0.5rem] p-[12px]"
                    />
                </label>
                </div>
                <label className="w-full text-white">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input 
                    type="email"
                    required
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your Email id"
                    value={formData.email}
                    className="w-full text-black rounded-[0.5rem] p-[12px]"
                    />
                </label>
                <div className="flex gap-x-4">
                <label className="w-full text-white relative">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">create password<sup className="text-pink-200">*</sup></p>
                    <input 
                    type={showpassword?("text"):("password")}
                    required
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    value={formData.password}
                    className="w-full text-black rounded-[0.5rem] p-[12px]"
                    />
                    <span 
                    className="absolute right-3 top-[38px] text-black cursor-pointer"
                    onClick={()=>{setShowPassword(!showpassword)}}>
                {showpassword ? (<AiOutlineEyeInvisible fontSize={24}/>) :(<AiOutlineEye fontSize={24}/>)}
                </span>
                </label>
                <label className="w-full text-white relative">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">confirm password<sup className="text-pink-200">*</sup></p>
                    <input 
                    type={showConfirmpassword?("text"):("password")}
                    required
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="confirm password"
                    value={formData.confirmPassword}
                    className="w-full text-black rounded-[0.5rem] p-[12px]"
                    />
                    <span 
                    className="absolute right-3 top-[38px] text-black cursor-pointer"
                    onClick={()=>{setShowConfirmPassword(!showConfirmpassword)}}>
                    {showConfirmpassword ? (<AiOutlineEyeInvisible fontSize={24}/>) :(<AiOutlineEye fontSize={24}/>)}
                </span>
                </label>
                </div>
                <button className="bg-yellow-500 rounded-[8px] font-medium px-[12px] py-[8px] mt-10 w-full">create account</button>
            </form>
        </div>
    )
}
export default SignupForm;