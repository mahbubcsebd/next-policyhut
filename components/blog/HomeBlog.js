/* eslint-disable no-undef */
/* eslint-disable import/extensions */

'use client';

import blogs from '@/data/blogs';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import SingleBlog from './SingleBlog';
import styles from './blogs.module.css';

function HomeBlog() {
    return (
        <div
            id="blog"
            className="blog section-pb"
        >
            <div className={`${styles.blogArea}`}>
                <Container>
                    <div class="sectionTopTitleBetween">
                            <h2 class="sectionTitle">Read Latest Articles</h2>
                            <Link
                                href="/blog"
                                className="btnBordered d-none d-md-block"
                            >
                                View All Blogs
                            </Link>
                    </div>
                    <Row>
                        {blogs.slice(0, 3).map((blog) => {
                            const { id, title, date, img, tag, desc } = blog;
                            return (
                                <Col
                                    md={6}
                                    lg={4}
                                    className="mb-4"
                                    key={id}
                                >
                                    <SingleBlog
                                        id={id}
                                        title={title}
                                        date={date}
                                        img={img}
                                        tag={tag}
                                        desc={desc}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomeBlog;
