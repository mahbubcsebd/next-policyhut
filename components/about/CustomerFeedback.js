"use client";

import customerFeedback from '@/data/customerFeedback';
import { Col, Container, Row } from 'react-bootstrap';
import SingleFeedback from './SingleFeedback';

const CustomerFeedback = () => {
  return (
      <div
          id="customerFeedback"
          className="customerFeedback section bgLight"
      >
          <div className="customerFeedbackArea">
              <Container>
                  <Row>
                      {customerFeedback.map((feedback) => {
                          return (
                              <Col
                                  lg={4}
                                  className="mb-4"
                                  key={feedback.id}
                              >
                                  <SingleFeedback feedback={feedback} />
                              </Col>
                          );
                      })}
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default CustomerFeedback