import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../AuthSlice'
import { Navigate } from 'react-router-dom'

export default function Protected({children}) {
    const user = useSelector(selectLoggedInUser)
    if(!user){
        return <Navigate replace={true} to={"/login"}/>
    }
    return children
 
}
