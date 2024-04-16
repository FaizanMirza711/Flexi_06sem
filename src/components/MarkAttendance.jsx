import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MarkAttendance = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/attendance", {
          params: {
            date: currentDate.format("MMMM D, YYYY"),
          },
        });
        setAttendance(response.data);
      } catch (error) {
        console.log("error fetching attendance data", error);
      }
    };
    fetchAttendanceData();
  }, [currentDate]);

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const handlePress = (employeeId) => {
    // window.location.href = `http://your-express-server.com/user/${employeeId}`;
  };

  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );
    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "",
    };
  });

  return (
    <div className="page-container-form">
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: 20,
          margin: "auto",
          maxWidth: 800,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
          }}
        >
          <AiOutlineLeft
            onClick={goToPrevDay}
            name="left"
            size={24}
            color="black"
          />
          <span>{formatDate(currentDate)}</span>
          <AiOutlineRight
            onClick={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </div>
        <div style={{ marginHorizontal: 12 }}>
          {employeeWithAttendance.map((item, index) => (
            <div
              onClick={() => handlePress(item.employeeId)}
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 10,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: 16 }}>
                  {item.employeeName.charAt(0)}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.employeeName}
                </span>
                <span style={{ marginTop: 5, color: "gray" }}>
                  {item.designation} ({item.employeeId})
                </span>
              </div>
              {item.status && (
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#FF69B4",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    {item.status.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
