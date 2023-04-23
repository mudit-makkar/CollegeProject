import { useState,useEffect } from "react";
import UsersTable from "./UsersTable";
import axios from "axios";
export default function Home()
{
    //{"first_name":"","last_name":"","email":"","gender":"","income":"","city":"","car":"","quote":"","phone_price":""}
    const [users,setUsers]=useState([]);

    function handleClick(url){       
            axios.get("http://localhost:3001/"+url)
            .then((response)=>{
                setUsers(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            })
            
    }
    
    return (
        <>
            <div>
            <button onClick={()=>handleClick("one")}>One</button>    
            <button onClick={()=>handleClick("two")}>Two</button>    
            <button onClick={()=>handleClick("three")}>Three</button>    
            <button onClick={()=>handleClick("four")}>Four</button>    
            <button onClick={()=>handleClick("five")}>Five</button>   
            </div>
            <UsersTable users={users}/>
        </>
    )
}