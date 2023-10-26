import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogTwoCol from '@/components/blog/BlogTwoCol';
import Banner from '@/components/global/Banner';
import { Col, Container, Row } from 'react-bootstrap';

const page = () => {
  return (
      <div
          id="blogWithSidebar"
          className="blogWithSidebar"
      >
          <div className="blogWithSidebarArea">
          <Banner/>
            <Container>
                <Row>
                    <Col md={8}>
                        <BlogTwoCol/>
                    </Col>
                    <Col md={4}>
                        <BlogSidebar/>
                    </Col>
                </Row>
            </Container>
          </div>
      </div>
  );
}

export default page