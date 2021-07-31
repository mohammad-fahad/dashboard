import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
import { Row, Col } from "react-bootstrap";
import Dashboard from "./components/DashBorad/Dashboard";

function App() {
  return (
    <Row className="w-100">
      <Col md={2} sm={12}>
        <SideBar />
      </Col>
      <Col md={10} sm={12}>
        <Dashboard />
      </Col>
    </Row>
  );
}

export default App;
