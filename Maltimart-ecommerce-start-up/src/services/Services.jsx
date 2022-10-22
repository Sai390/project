import React from 'react'
import { motion } from 'framer-motion'
import "./services.css";
import { Container,Row,Col } from 'reactstrap'
const Services = () => {
  return <section className="services">
    <Container>
        <Row>
            <Col lg ='3' md='4'>
                <div className="service__item">
                    <span><i class="ri-truck-line"></i>
                    <div>
                        <h3>
                            Free Shipping
                        </h3>
                    </div>
                    </span>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
 
  
}

export default Services