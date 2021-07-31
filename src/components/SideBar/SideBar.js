import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div style={{ padding: "10vh 5vw", fontWeight: "bold" }}>
      <div>
        <h6>University</h6>
        <h6 className="my-5">Calendar</h6>
        <h6>Teachers</h6>
        <h6 className="my-5">Course</h6>
        <h6>Attendance</h6>
        <h6 className="my-5">Assignment</h6>
      </div>
      <div style={{ marginTop: "40vh" }}>
        <h6>David Smith</h6>
      </div>
    </div>
  );
}

export default SideBar;
