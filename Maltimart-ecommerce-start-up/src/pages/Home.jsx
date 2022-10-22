import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet  from '../components/Helmet/Helmet';
import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import "../styles/home.css";
import Services from '../services/Services';




const Home = () => {
  const year=new Date().getFullYear()
  return <Helmet tittle={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending Products of {year} all available here
              </p>
              <h2> I've always loved great upholstery, and think that a great sofa is one of the most important pieces of furniture in your home.</h2>
              <p>-Bobby Berk (Telivision Host) </p>
              <motion.button  whileTap={{scale:1.2}} className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
  </Helmet> 
  
}

export default Home