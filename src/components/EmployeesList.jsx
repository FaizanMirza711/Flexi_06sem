import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAddClick = () => {
    navigate("/add-employee");
  };

  return (
    <div
      className="page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/person-plus-fill.svg"
            alt="Add Employee"
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            onClick={handleAddClick}
          />
          <span>Add </span>
        </div>
      </div>
      <div style={{ width: "80%", maxWidth: "400px" }}>
        {employees.map((employee) => (
          <div
            key={employee.employeeId}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              marginBottom: "10px",
            }}
          >
            <h5 style={{ marginBottom: "5px" }}>{employee.employeeName}</h5>
            <p style={{ marginBottom: "5px" }}>{employee.employeeId}</p>
            <p style={{ marginBottom: "0" }}>{employee.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
