import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom"


const ProtectedRoute = ({ Component}) => {
    const navigate = useNavigate();

    useEffect(() => {
        let Status = JSON.parse(localStorage.getItem("isLoggedin")) || false
        if(!Status){
            navigate('/Login')
        }
    } , [])

    return(
        <div>
            <Component />
        </div>
        
    )
    
}

export default ProtectedRoute