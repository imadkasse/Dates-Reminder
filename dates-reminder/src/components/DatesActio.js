import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesActio({deleteData,viweData}) {
  return (
    <Row className="justify-content-center  my-2 ">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2" onClick={deleteData}> مسح الكل </button>
        <button className="btn-style p-2" onClick={viweData}> عرض الكل</button>
      </Col>
    </Row>
  );
}

export default DatesActio;
