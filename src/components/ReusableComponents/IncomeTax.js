import React from "react";

function IncomeTax(props) {
  const data = props.data;
  return (
    <div
      style={{
        borderLeft: "5px solid #F2994A",
        backgroundColor: "#F8E4A5",
        color: "#F2A558",
        padding: "12px",
      }}
    >
      <p>Income Tax</p>
      {data ? (
        <div>
          <small>Chapter 1</small>
          <small>Chapter 2</small>
          <br /> <br />
          <small>11 AM - 12 AM</small>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default IncomeTax;
