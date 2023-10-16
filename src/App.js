// import logo from './logo.svg';
// import './index.css';
import { Route,Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedin,setLoggedin]=useState(false);
  console.log(loggedin);
  return (
    <div>
      <div className="w-screen min-h-screen bg-black flex flex-col">
     <Navbar isLoggedIn={loggedin} setLoggedIn={setLoggedin}/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login setLoggedIn={setLoggedin}/>}/>
    <Route path="/signup" element={<Signup setLoggedIn={setLoggedin}/>}/>
    <Route path="/dashboard" element={
      <PrivateRoute isLoggedIn={loggedin}>
        <Dashboard setLoggedIn={setLoggedin}/>
      </PrivateRoute>
    
    
    }/>


     </Routes>
     </div>

     
    </div>
  );
}

export default App;
