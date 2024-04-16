import "./App.css";
import React from "react";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import MarkAttendance from "./components/MarkAttendance";
import AddEmployees from "./components/AddEmployees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/attendance" element={<MarkAttendance />} />
          <Route path="/add-employee" element={<AddEmployees />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  const empImg = "./assets/people-fill.svg";
  const attendanceImg = "./assets/person-badge.svg";
  return (
    <div className="page-container">
      <div className="card-container">
        <Card imgSrc={empImg} text="Employees List" />
        <Card imgSrc={attendanceImg} text="Mark attendance" />
      </div>
    </div>
  );
}

export default App;
