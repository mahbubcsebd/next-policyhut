"use client";

import customerFeedback from '@/data/customerFeedback';
import { Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import SingleFeedback from './SingleFeedback';

const CustomerFeedback = () => {
        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <BsArrowRight />,
            prevArrow: <BsArrowLeft />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
  return (
      <div
          id="customerFeedback"
          className="customerFeedback section bgLight"
      >
          <div className="customerFeedbackArea">
              <Container>
                  <Row>
                      <Slider
                          {...settings}
                      >
                          {customerFeedback.map((feedback) => {
                              return (
                                  <SingleFeedback
                                      feedback={feedback}
                                      key={feedback.id}
                                  />
                              );
                          })}
                      </Slider>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default CustomerFeedback