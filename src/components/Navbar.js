import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'

import toast from "react-hot-toast";

function Navbar(props){
    let isLoggedIn=props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn;
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto  ">
            
            <Link to="/">
                <img src={logo} alt="logo " width={160} height={32} loading="lazy" />
                </Link>
            <nav>
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4">
           { !isLoggedIn &&
            <Link to="/login">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
           </Link>
            }
            {!isLoggedIn &&
            <Link to="/signup">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button>
           </Link>
            }
            { isLoggedIn &&
            <Link to="/">
            <button onClick={()=>{
                setLoggedIn(false);
                toast.success("Logged out");
            }} className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Logout</button>
           </Link>
            }
            {isLoggedIn &&
            <Link to="/dashboard">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
           </Link>
            }

            </div>
            
        </div>
    )
}

export default Navbar;