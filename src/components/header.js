import React, {useState} from "react";
import Profile from "./Profile";
function Header({setSelect,userId}){
    return(
    <>
    
        <div>
            <div class="w-full flex justify-start">
                <Profile userId={userId}/>
            </div>
        </div>
   
    <div class="w-full text-center flex bg-yellow-500">
        <a class="w-1/5 focus:text-red-400 hover:text-red-400" onClick={()=>{setSelect(1)}}>GPA</a>   
        <a class="w-1/5 focus:text-red-400 hover:text-red-400" onClick={()=>{setSelect(2)}}>Volunteer</a>
        <a class="w-1/5 focus:text-red-400 hover:text-red-400" onClick={()=>{setSelect(3)}}>Sports</a>
        <a class="w-1/5 focus:text-red-400 hover:text-red-400"onClick={()=>{setSelect(4)}}>Awards</a>
        <a class="w-1/5 focus:text-red-400 hover:text-red-400" onClick={()=>{setSelect(5)}}>Analysis Report</a>
    </div>
   


    </>
);};
export default Header;