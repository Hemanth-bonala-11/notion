
import frame from '../assets/frame.png'
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from 'react-icons/fc'

function Template(props){
    return (
        <div className='max-w-[1160px] flex w-11/12 py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[425px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] ' >
                    {props.title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem]'>
                <span className='text-white italic '>{props.desc1}</span><br/>
                <span className='text-blue-300 italic '>{props.desc2}</span>
                </p>

                {
                props['formType'] ==="signup"?
                (<SignupForm setLoggedIn={props.setLoggedIn}/>):
                (<LoginForm setLoggedIn={props.setLoggedIn}/>)
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-white'></div>
                    <p className='text-white font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-white'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px]  font-medium text-white border border-white px-[12px] py-[8px] gap-x-2 mt-6' >
                    <FcGoogle/> 
                <p> signup with google</p></button>
            </div>
            <div className='relative w-11/12 mx-w-[450px]'>
                <img src={frame}
                alt="frame image"
                height={510}
                width={455}
                loading="lazy"
                className='absolute right-2 -top-3'
                />
                <img src={props.image}
                alt="student image"
                height={504}
                width={450}
                loading="lazy"
                className='absolute -top-4 right-4'
                />

            </div>
        </div>
    )
}

export default Template;