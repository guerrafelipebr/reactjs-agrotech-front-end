import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      key: 'feature1',
      icon: '🌱',
      title: t('home.feature1'),
      desc: t('home.feature1Desc')
    },
    {
      key: 'feature2',
      icon: '📊',
      title: t('home.feature2'),
      desc: t('home.feature2Desc')
    },
    {
      key: 'feature3',
      icon: '🏞️',
      title: t('home.feature3'),
      desc: t('home.feature3Desc')
    },
    {
      key: 'feature4',
      icon: '♻️',
      title: t('home.feature4'),
      desc: t('home.feature4Desc')
    }
  ];

  const testimonials = [
    {
      key: 'testimonial1',
      name: t('home.testimonial1Name'),
      role: t('home.testimonial1Role'),
      text: t('home.testimonial1Text'),
      avatar: '👨‍🌾'
    },
    {
      key: 'testimonial2',
      name: t('home.testimonial2Name'),
      role: t('home.testimonial2Role'),
      text: t('home.testimonial2Text'),
      avatar: '👩‍🌾'
    },
    {
      key: 'testimonial3',
      name: t('home.testimonial3Name'),
      role: t('home.testimonial3Role'),
      text: t('home.testimonial3Text'),
      avatar: '👨‍🌾'
    },
    {
      key: 'testimonial4',
      name: t('home.testimonial4Name'),
      role: t('home.testimonial4Role'),
      text: t('home.testimonial4Text'),
      avatar: '👩‍🌾'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <Container fluid className="px-md-4">
          <Row className="align-items-center min-vh-70 text-center">
            <Col lg={12} md={12} className="mb-4 mb-lg-0">
              <h3 className="hero-title display-5 fw-bold text-white mb-3">
                {t('home.title')}
              </h3>
              <p className="hero-description mb-4">
                {t('home.description')}
              </p>
              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/register" 
                  className="btn-success btn-lg me-3 mb-2"
                >
                  {t('home.getStarted')}
                </Button>
                <Button 
                  as={Link} 
                  to="/about" 
                  variant="outline-success" 
                  className="btn-lg me-3 mb-2"
                >
                  {t('home.learnMore')}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container fluid className="px-md-4">
          <h3 className="text-center text-success mb-5 display-6 fw-bold">
            {t('home.features')}
          </h3>
          <Row>
            {features.map((feature) => (
              <Col lg={3} md={6} sm={12} key={feature.key} className="mb-4">
                <Card className="feature-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3">
                      {feature.icon}
                    </div>
                    <Card.Title className="text-success fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {feature.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <Container fluid className="px-md-4">
          <h3 className="text-center text-success mb-2 display-6 fw-bold">
            {t('home.testimonials')}
          </h3>
          <p className="text-center text-muted mb-5">
            {t('home.testimonialSubtitle')}
          </p>
          <Row>
            <Col lg={10} md={12} className="mx-auto">
              <Carousel pause="hover" className="testimonials-carousel">
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.key} className="py-5">
                    <div className="testimonial-card text-center">
                      <div className="testimonial-avatar mb-4">
                        {testimonial.avatar}
                      </div>
                      <p className="testimonial-text mb-4 fs-5">
                        "{testimonial.text}"
                      </p>
                      <h5 className="text-success fw-bold mb-1">
                        {testimonial.name}
                      </h5>
                      <p className="text-muted small">
                        {testimonial.role}
                      </p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 mt-4">
        <Container fluid className="px-md-4">
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8}>
              <h2 className="text-success fw-bold mb-3 display-6">
                {t('home.cta.title')}
              </h2>
              <p className="lead text-muted mb-4">
                {t('home.cta.description')}
              </p>
            </Col>
            <Col lg={4} className="text-center text-lg-end">
              <Button 
                as={Link} 
                to="/register" 
                className="btn btn-success btn-lg"
                size="lg"
              >
                {t('home.cta.button')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
