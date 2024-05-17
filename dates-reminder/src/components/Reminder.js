import React from 'react'
import { Col, Row } from 'react-bootstrap';

function Reminder({person}) {
  return (
    <Row className="justify-content-center ">
          <Col sm="8" className="">
            <div className="rectangle p-2">
              {person.length ? (
                person.map((person) => {
                  return (
                    <div key={person.id} className="d-flex border-bottom mx-3 my-3">
                      <img src={person.img} alt="img" className="img-avatar " />
                      <div className="px-3">
                        <p className="d-inline fs-5">{person.name}</p>
                        <p className="fs-6">{person.date}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 className="p-5 text-center">لا يوجد أي يبانات</h2>
              )}
            </div>
          </Col>
        </Row>
  )
}

export default Reminder
