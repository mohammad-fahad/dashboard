import React, { useRef } from "react";
import { useState } from "react";
import {
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Button,
  Table,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faAngleLeft,
  faAngleRight,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import Economics from "../ReusableComponents/Economics";
import French from "../ReusableComponents/French";
import BusStudy from "../ReusableComponents/BusStudy";
import IncomeTax from "../ReusableComponents/IncomeTax";
import Accounts from "../ReusableComponents/Accounts";
import { FileDrop } from "react-file-drop";
import PerformanceBlock from "../PerformanceBlock";

function Dashboard() {
  const [drop, setDrop] = useState("05");
  const [subject, setSubject] = useState("Select Subject");

  const fileInputRef = useRef(null);
  const onFileInputChange = (event) => {
    const { files } = event.target;
    // do something with your files...
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const data = true;
  const color = true;
  return (
    <div
      style={{
        marginTop: "10vh",
        fontWeight: "bold",
        backgroundColor: "#F4F8FB",
      }}
    >
      <Row>
        <Col md={2} sm={12} style={{ marginTop: "8vh", paddingLeft: "3vw" }}>
          <h1>Dashboard</h1>
        </Col>
        <Col md={10} sm={12}>
          <div
            className="pt-4 px-3 d-flex justify-content-between"
            style={{
              backgroundColor: "#98CCD2",
              color: "#4B8890",
              paddingBottom: "2vh",
            }}
          >
            <div>
              <p>Updates</p>
              <p>05</p>
            </div>
            <div>
              <p>
                All classes are cancelled for 24th July 2020, due to mandatory{" "}
                <br />
                curfew. No Classes will resume till further notice.
              </p>
            </div>
            <div
              style={{
                borderLeft: "2px solid #4B8890",
                paddingLeft: "5vw",
                paddingBottom: "2vh",
              }}
            >
              <div className="d-flex align-items-center ">
                <p className="pe-3">
                  semester 6 results will be declared on 31st July 2020.
                </p>
                <div style={{ transform: "rotate(270deg)" }}>
                  <p>02/05</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className="fs-4" />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Second section */}

      <Row className="justify-content-between">
        <Col md={5} sm={12}>
          <Row style={{ paddingLeft: "3vw" }}>
            <Col md={5} sm={12}>
              <Row
                style={{
                  margin: "8vh 0",
                  backgroundColor: "#fff",
                  padding: "5vh",
                  borderRight: "1px solid black",
                  height: "38vh",
                }}
              >
                <Col md={4} sm={12}>
                  <p>Attendance</p>
                  <h2>73%</h2>
                  <p>Semester</p>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={drop}
                    variant="secondary"
                  >
                    <Dropdown.ItemText onClick={() => setDrop("05")}>
                      05
                    </Dropdown.ItemText>
                    <Dropdown.Item as="button" onClick={() => setDrop("04")}>
                      04
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => setDrop("03")}>
                      03
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => setDrop("02")}>
                      02
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Col>

            <Col md={7} sm={12}>
              <Row
                style={{
                  margin: "8vh 0",
                  paddingLeft: "2vw",
                  backgroundColor: "#fff",
                  padding: "5vh",
                  height: "38vh",
                }}
              >
                <Col md={6} sm={12}>
                  <div>
                    <p>Accounts</p>
                    <p>78/100</p>
                  </div>
                  <div>
                    <p>Bus. Study</p>
                    <p>78/100</p>
                  </div>
                  <div>
                    <p>Economics</p>
                    <p>75/100</p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div>
                    <p>Inc. Tax</p>
                    <p>70/100</p>
                  </div>
                  <div style={{ color: "orange" }}>
                    <p>French</p>
                    <p>65/100</p>
                  </div>
                  <div>
                    <p>Com. Skill</p>
                    <p>72/100</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Col
            md={11}
            sm={12}
            style={{
              margin: "-7vh 3vw",
              padding: "3vw",
              backgroundColor: "#fff",
              padding: "5vh",
            }}
          >
            <PerformanceBlock />
            <div className="d-flex justify-content-between">
              <p>Performance (CGPA)</p>

              <div className="d-flex">
                <FontAwesomeIcon icon={faAngleLeft} className="mt-1" />
                <p>Sem 1</p>
                <FontAwesomeIcon icon={faAngleRight} className="mt-1" />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center fs-6">
              <div className="p-4 border">
                <h1>8.2</h1>
                <p>Accounts</p>
              </div>
              <div className="p-4 border">
                <h1>8.2</h1>
                <p>Accounts</p>
              </div>
              <div className="p-4 border">
                <h1>8.2</h1>
                <p>Accounts</p>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </Col>
        </Col>
        <Col md={7} sm={12} style={{ margin: "8vh 0" }} className="bg-white">
          <Row>
            <Col md={9} sm={6}>
              <p>Schedule</p>
            </Col>
            <Col md={3} sm={6} className="d-flex justify-content-between pe-5">
              <p>
                <FontAwesomeIcon icon={faAngleLeft} />
                Week 1
                <FontAwesomeIcon icon={faAngleRight} />
              </p>
              <p>
                <FontAwesomeIcon icon={faAngleLeft} />
                July 2020
                <FontAwesomeIcon icon={faAngleRight} />
              </p>
              <FontAwesomeIcon icon={faCalendar} className="mt-1" />
            </Col>
          </Row>
          <Row>
            <Col md={2} sm={4}>
              <div>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  <p>Monday</p>
                  <p>13</p>
                </div>

                <Row>
                  <Col md={2} sm={6}>
                    <small>
                      8 <br /> AM
                    </small>
                  </Col>
                  <Col md={10} sm={6}>
                    <Accounts />
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={6}>
                    <small>
                      9 <br /> AM
                    </small>
                  </Col>
                  <Col md={10} sm={6}>
                    <IncomeTax />
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={6}>
                    <small>
                      10 <br /> AM
                    </small>
                  </Col>
                  <Col md={10} sm={6}>
                    <BusStudy />
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={6}>
                    <small>
                      11 <br /> AM
                    </small>
                  </Col>
                  <Col md={10} sm={6}>
                    <French />
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={6}>
                    <small>
                      12 <br /> AM
                    </small>
                  </Col>
                  <Col md={10} sm={6}>
                    <Economics />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={2} sm={4}>
              <div
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <p>Tuesday</p>
                <p>14</p>
              </div>
              <IncomeTax />
              <BusStudy />
              <Accounts />
              <IncomeTax data={data} />
            </Col>
            <Col md={2} sm={4}>
              <div
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <p>Wednesday</p>
                <p>15</p>
              </div>
              <div>
                <h2
                  style={{
                    borderLeft: "5px solid #BDBDBD",
                    color: "#BDBDBD",
                    backgroundColor: "#E0E0E0",
                    padding: "12px",
                    paddingTop: "10vh",
                    height: "38vh",
                    margin: "auto",
                  }}
                >
                  Off <br /> Day
                </h2>
              </div>
            </Col>
            <Col md={2} sm={4}>
              <div
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <p>Thursday</p>
                <p>16</p>
              </div>
              <div
                style={{
                  borderLeft: "5px solid #7F51E0",
                  color: "#7F51E0",
                  padding: "12px",
                  backgroundColor: "#CEC1FF",
                }}
              >
                <p>French</p>
              </div>
              <Economics />
              <BusStudy />
              <IncomeTax />
              <div
                style={{
                  borderLeft: "5px solid #BDBDBD",
                  color: "#BDBDBD",
                  padding: "12px",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <p>
                  Seminar <br /> Audi 2
                </p>
              </div>
            </Col>
            <Col md={2} sm={4}>
              <div
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <p>Friday</p>
                <p>17</p>
              </div>
              <IncomeTax />
              <BusStudy />
              <div
                style={{
                  borderLeft: "5px solid #BDBDBD",
                  color: "#BDBDBD",
                  padding: "12px",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <p>
                  Project <br /> Submission
                </p>
              </div>
              <div
                style={{
                  borderLeft: "5px solid #7F51E0",
                  color: "#7F51E0",
                  padding: "12px",
                  backgroundColor: "#CEC1FF",
                }}
              >
                <p>French</p>
              </div>
              <div
                style={{
                  borderLeft: "5px solid #EB5757",
                  color: "#F07272",
                  padding: "12px",
                  backgroundColor: "#FFC1C1",
                }}
              >
                <p>Comm. Skill</p>
              </div>
            </Col>
            <Col md={2} sm={4}>
              <div
                style={{
                  borderBottom: "1px solid black",
                }}
              >
                <p>Sat/Sun</p>
                <p>18-19</p>
              </div>
              <div
                style={{
                  borderLeft: "5px solid #BDBDBD",
                  color: "#BDBDBD",
                  backgroundColor: "#E0E0E0",
                  padding: "12px",
                  paddingTop: "10vh",
                  height: "38vh",
                  margin: "auto",
                }}
              >
                <h2 style={{ transform: "rotate(270deg)" }}>Off Day</h2>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ margin: "8vh 0", padding: "5vh" }}>
        <Col md={8} sm={12}>
          <div className="d-flex">
            <h6 className="me-5">Assignment</h6>
            <DropdownButton
              id="dropdown-item-button"
              title={subject}
              variant="secondary"
            >
              <Dropdown.ItemText onClick={() => setSubject("Accounting")}>
                Accounting
              </Dropdown.ItemText>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Income Tax")}
              >
                Income Tax
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Bus. Study")}
              >
                Bus. Study
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Economics")}
              >
                Economics
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Status</th>
                <th>Submission Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accounts</td>
                <td>Rajesh Jashi</td>
                <td>*Pending</td>
                <td>31 July, 2020</td>
              </tr>
              <tr>
                <td>Bus. Study</td>
                <td>Dave Stanley</td>
                <td>*Submitted</td>
                <td>5th August, 2020</td>
              </tr>
              <tr>
                <td>French</td>
                <td>Marie Dupuis</td>
                <td>*Pending</td>
                <td>31st July, 2020</td>
              </tr>
              <tr>
                <td>Income Tax</td>
                <td>Manish Shukla</td>
                <td>*Drafted</td>
                <td>31st July, 2020</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={4} sm={12}>
          <h5>Upload Assignment</h5> <br />
          <div
            style={{
              padding: "40px",
              border: "1px dashed gray",
              margin: "auto",
            }}
            onTargetClick={onTargetClick}
            className="text-center"
          >
            <input
              onChange={onFileInputChange}
              ref={fileInputRef}
              type="file"
              className="hidden"
            />
            {/* <Button
              variant="secondary"
              className="d-flex align-items-center "
              style={{ margin: "2vh 7vw" }}
            >
              <p className="mt-2 me-2">Attach</p>
              <FontAwesomeIcon icon={faPaperclip} />
            </Button> */}
            <p className="text-muted">Or drop file here PDF or word doc</p>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <DropdownButton
              id="dropdown-item-button"
              title={subject}
              variant="secondary"
            >
              <Dropdown.ItemText onClick={() => setSubject("Accounting")}>
                Accounting
              </Dropdown.ItemText>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Income Tax")}
              >
                Income Tax
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Bus. Study")}
              >
                Bus. Study
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setSubject("Economics")}
              >
                Economics
              </Dropdown.Item>
            </DropdownButton>
            <Button variant="success">Uplad and Submit</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
