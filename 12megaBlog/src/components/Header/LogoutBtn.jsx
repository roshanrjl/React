import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/configure";
import { logout } from "../../store/authSlice";

function LogoutBtn({onClick}){
    const dispatch = useDispatch()
    const handleLogout=()=>{
        authService.logout()
            .then(() => {
                dispatch(logout())
            })   
    }
    return(
        <button className="text-gray-900 hover:text-gray-700" onClick={onClick}>
            Logout
        </button>
    )
}