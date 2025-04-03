import { useContext, useEffect, useState } from 'react';
// import {UserContext} from '../context/Usercontext';
import { jwtDecode } from "jwt-decode"; 
import MedHistory from "../components/MedHistory";


export default function MedicalHistory(){
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        try {
            const token = localStorage.getItem("accessToken");

            if (token) {
                const decoded = jwtDecode(token);
                setUserData(token);
            } else {
                setError("No token found");
            }
        } catch (err) {
            setError("Failed to decode token");
            console.error("Error decoding token:", err);
        }
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }


    return(
        <div className = "bg-[#F8F9FA] m-4 p-8 shadow rounded-lg w-full mt-8">
            <h1 className="font-serif text-3xl text-center my-4">Medical History</h1>
            <MedHistory token={userData}/>

        </div>
    )

}