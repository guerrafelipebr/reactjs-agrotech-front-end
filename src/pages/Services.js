import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Services.css';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      key: 'consulting',
      icon: '🌿',
      title: t('services.consulting'),
      desc: t('services.consultingDesc'),
      color: 'success'
    },
    {
      key: 'orgFarming',
      icon: '🥬',
      title: t('services.orgFarming'),
      desc: t('services.orgFarmingDesc'),
      color: 'success'
    },
    {
      key: 'diagnosis',
      icon: '🔍',
      title: t('services.diagnosis'),
      desc: t('services.diagnosisDesc'),
      color: 'success'
    },
    {
      key: 'management',
      icon: '📋',
      title: t('services.management'),
      desc: t('services.managementDesc'),
      color: 'success'
    }
  ];

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="hero-section py-5 bg-success text-white">
        <Container fluid className="px-md-4">
          <Row className="align-items-center text-center">
            <Col lg={12} md={12}>
              <h3 className="display-4 fw-bold text-white mb-3">
                {t('services.title')}
              </h3>
              <p className="hero-description mb-4">
                {t('services.subtitle')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-5">
        <h2 className="text-center text-success mb-5 display-5 fw-bold">
            {t('home.features')}
        </h2>        
        <Container fluid className="px-md-4">
          <Row>
            {services.map((service) => (
              <Col lg={6} md={12} key={service.key} className="mb-4">
                <Card className="service-card h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="service-icon mb-4">
                      {service.icon}
                    </div>
                    <Card.Title className="text-success fw-bold mb-3">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {service.desc}
                    </Card.Text>
                    <Button 
                      variant="outline-success"
                      as={Link}
                      to="/contact"
                    >
                      {t('nav.contact')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

        <section className="benefits-section py-5 bg-light">
          <Container fluid className="px-md-4">
            <h2 className="text-center text-success mb-5 display-5 fw-bold">
            {t('home.benefits')}
            </h2>
            <Row className="g-4">
            <Col md={6} className="mb-4 d-flex">
              <div className="benefit-item w-100">
                <h4 className="text-success mb-2">✓ Aumento de Produtividade</h4>
                <p className="text-muted">
                Técnicas comprovadas para melhorar a produção de suas culturas mantendo a sustentabilidade.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4 d-flex">
              <div className="benefit-item w-100">
                <h4 className="text-success mb-2">✓ Redução de Custos</h4>
                <p className="text-muted">
                Otimize seus recursos e reduza despesas com práticas eficientes e sustentáveis.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4 d-flex">
              <div className="benefit-item w-100">
                <h4 className="text-success mb-2">✓ Preservação Ambiental</h4>
                <p className="text-muted">
                Implemente técnicas que preservam o solo, água e biodiversidade de sua propriedade.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4 d-flex">
              <div className="benefit-item w-100">
                <h4 className="text-success mb-2">✓ Suporte Especializado</h4>
                <p className="text-muted">
                Tenha acesso a especialistas em agricultura sustentável para orientar suas decisões.
                </p>
              </div>
            </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
      <section className="services-cta py-5">
        <Container fluid className="px-md-4">
          <Row className="text-center">
            <Col>
              <h2 className="text-success fw-bold mb-4">
                Pronto para começar?
              </h2>
              <Button 
                as={Link} 
                to="/register"
                className="btn btn-success btn-lg me-3 mb-2"
              >
                {t('home.getStarted')}
              </Button>
              <Button 
                as={Link} 
                to="/contact"
                variant="outline-success"
                className="btn-lg mb-2"
              >
                {t('nav.contact')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
