import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from './Navbar'
import "./PrivateScreen.css"

const PrivateScreen =({ history}) => {

    const [error, setError] = useState("");
  const [data, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };


          try {
            const { data } = await axios.get("/api/private", config);
            setPrivateData(data.data);
          } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
          }
        };
        fetchPrivateData();
      
    },[history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    };

    return(

        error? <span className ="error-message">{error}</span> : <> 
        <div><NavBar></NavBar></div>
        <div className="private-screen__title">Welcome to SLIIT MIS</div>
        <button  className="logout-btn" onClick={logoutHandler} >Logout </button> </> 
       
     

    )
}


export default PrivateScreen;