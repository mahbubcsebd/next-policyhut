import ContactForm from "@/components/contact/ContactForm"
import ContactHelp from "@/components/contact/ContactHelp"
import Banner from "@/components/global/Banner"
import { Col, Container, Row } from "react-bootstrap"

const page = () => {
  return (
      <div className="contactPage">
          <Banner />
          <Container>
              <Row>
                  <Col md={6}>
                      <ContactHelp />
                  </Col>
                  <Col md={6}>
                      <ContactForm />
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default page