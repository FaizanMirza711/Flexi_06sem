import React from "react";
import { useNavigate } from "react-router-dom"


export default function Card({ imgSrc, text }) {
  const navigate = useNavigate();

  const handleClick = () =>{
    // Determine the route to navigate to based on the text prop
    const route = text === "Student List" ? "/employees" : "/attendance";
    // Navigate to the determined route
    navigate(route);
  }
  
  return (
    <div className="card" style={{ width: "18rem" }} onClick={handleClick}>
      <img src={imgSrc} className="card-img-top" alt=""/>
      <div className="card-body">
        <p className="card-text text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
