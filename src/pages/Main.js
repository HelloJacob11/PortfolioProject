import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import GPA from "../components/main/GPA";
import Volunteer from "../components/main/Volunteer";
import Sports from "../components/main/Sports";
import Awards from "../components/main/Awards";
import Analysis_Report from "../components/main/Analysis Report";
import Header from "../components/header";
function Main(){
    const [select, setSelect] = useState(1);
    const loc = useLocation();
    const para = new URLSearchParams(loc.search);
    const userId = para.get("userId");
    return(
    <>
    
    <Header setSelect ={setSelect} userId={userId} />
    {select == 1 && (<GPA/>)}
    {select == 2 && (<Volunteer/>)}
    {select == 3 && (<Sports/>)}
    {select == 4 && (<Awards/>)}
    {select == 5 && (<Analysis_Report/>)}
    </>
);};
export default Main;