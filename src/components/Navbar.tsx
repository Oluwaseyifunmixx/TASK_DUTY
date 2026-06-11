// import React from 'react'
import { Link } from "react-router-dom";
import TaskDutyLogo from "../assets/Task Duty Logo.svg"
import profilePicture from "../assets/Profile picture.svg";


const Navbar = () => {
  return (
   <nav style ={{
      borderBottom: '0.5px solid #B8B6B6',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
   }}>

     <div style={{
        width: "100%",
        maxWidth: "1200px",
        padding: "0 80px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        
        <Link to="/">
        <img src={TaskDutyLogo} alt="Task Duty Logo" style={{
            height: "40px",
            objectFit: "contain"
        }}  />
        </Link>
    
        <span style={{
            fontSize: "27.37px",
            fontWeight: "600",
            color: "#2D0050",
            fontStyle: "semibold",
            fontFamily: "Signika Negative",
            textDecoration: "none",
            letterSpacing: "0px"
        }}>
            TaskDuty
        </span>
      </div>
    

    <div style={{
        display: "flex",
        gap: "40px",
        alignItems: "center"
    }}>
        <Link to="/tasks/new" style={{
            fontSize: "22px",
            fontWeight: "500",
            color: "#292929",
            textDecoration: "none"
        }}>
            New Task
        </Link>

        <Link to="/tasks" style={{
            fontSize: "22px",
            fontWeight: "500",
            color: "#292929",
            textDecoration: "none"
        }}>
            All Tasks
        </Link>
      
       <img src={profilePicture} alt="Profile picture" style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
            border: "0.5px solid #292929"
        }} />

    </div>

    </div>
       
    

   </nav>
  )
}

export default Navbar