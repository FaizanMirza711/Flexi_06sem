import React, { useState } from "react";
import axios from "axios";

export default function AddEmployees() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    designation: "",
    phoneNumber: "",
    dateOfBirth: "",
    joiningDate: "",
    activeEmployee: true,
    salary: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEmployee = () => {
    axios
      .post("http://localhost:8000/addEmployee", formData)
      .then((response) => {
        alert("Student Details added successfully");
        // Clear form data after successful submission
        setFormData({
          employeeName: "",
          employeeId: "",
          designation: "",
          phoneNumber: "",
          dateOfBirth: "",
          joiningDate: "",
          activeEmployee: true,
          salary: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error("Error adding Student Data:", error);
        alert("Failed to add Student");
      });
  };

  return (
    <div className="page-container-form">
      <div className="form-container">
        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="joiningDate" className="form-label">
            Admisssion Date
          </label>
          <input
            type="date"
            className="form-control"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Fees
          </label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activeEmployee" className="form-label">
            Graduated
          </label>
          <select
            className="form-select"
            name="activeEmployee"
            value={formData.activeEmployee}
            onChange={handleInputChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddEmployee}
        >
          Add Student
        </button>
      </div>
    </div>
  );
}
