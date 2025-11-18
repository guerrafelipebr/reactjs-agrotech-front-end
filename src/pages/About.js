import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="hero-section py-5 bg-success text-white">
        <Container fluid className="px-md-4">
          <Row className="align-items-center text-center">
            <Col lg={12} md={12}>
              <h1 className="display-4 fw-bold text-white mb-3">
                {t('about.title')}
              </h1>
              <p className="lead text-white">
                {t('about.description')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision py-5">
        <Container fluid className="px-md-4">
          <Row className="mb-5">
            <Col lg={12} md={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <h3 className="text-success fw-bold mb-3">
                    🎯 {t('about.mission')}
                  </h3>
                  <p className="text-muted">
                    {t('about.missionText')}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} md={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <h3 className="text-success fw-bold mb-3">
                    🚀 {t('about.vision')}
                  </h3>
                  <p className="text-muted">
                    {t('about.visionText')}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

{/*       <section className="about-content py-5 bg-light">
        <Container fluid className="px-md-4">
          <Row>
            <Col md={12} className="mb-5">
              <div className="about-text">
                <h2 className="text-success fw-bold mb-4">
                  {t('about.title')}
                </h2>
                <p className="lead text-muted">
                  {t('about.description')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* ODS 2 Section */}
      <section className="ods-section py-5">
        <Container fluid className="px-md-4">
          <Row className="mb-5">
            <Col lg={12} className="text-center mb-5">
              <h3 className="text-success fw-bold display-6 mb-3">
                🌍 {t('about.ods2')}
              </h3>
              <p className="lead text-muted">
                {t('about.ods2Desc')}
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card className="ods-card shadow-sm border-0 mb-4">
                <Card.Body className="p-5">
                  <h3 className="text-success fw-bold mb-4">
                    {t('about.ods2Title')}
                  </h3>
                  
                  <div className="ods-goals mb-4">
                    <h5 className="text-success fw-bold mb-3">
                      {t('about.ods2Goals')}
                    </h5>
                    <ul className="goals-list">
                      <li className="mb-2">
                        <strong>🎯 {t('about.ods2Goal1')}</strong>
                      </li>
                      <li className="mb-2">
                        <strong>📈 {t('about.ods2Goal2')}</strong>
                      </li>
                      <li className="mb-2">
                        <strong>💪 {t('about.ods2Goal3')}</strong>
                      </li>
                      <li className="mb-2">
                        <strong>🌱 {t('about.ods2Goal4')}</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="ods-commitment">
                    <h5 className="text-success fw-bold mb-3">
                      Nosso Compromisso
                    </h5>
                    <p className="text-muted">
                      A SmartFarm Brasil se compromete a contribuir para o alcance do ODS 2 através de:
                    </p>
                    <ul className="text-muted">
                      <li>Desenvolvimento de ferramentas tecnológicas acessíveis para pequenos e médios produtores</li>
                      <li>Disseminação de conhecimento em agricultura sustentável e agroecologia</li>
                      <li>Apoio a práticas que preservam recursos naturais e aumentam produtividade</li>
                      <li>Promoção de equidade e inclusão no acesso à tecnologia agrícola</li>
                      <li>Suporte contínuo para garantir segurança alimentar com sustentabilidade</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section py-4 bg-light">
        <Container fluid className="px-md-4">
          <h2 className="text-center text-success fw-bold display-5 mb-5">
            Nossos Valores
          </h2>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">🌱</div>
                  <h5 className="text-success fw-bold">Sustentabilidade</h5>
                  <p className="text-muted">
                    Comprometidos com práticas que preservam o meio ambiente para futuras gerações.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">💡</div>
                  <h5 className="text-success fw-bold">Inovação</h5>
                  <p className="text-muted">
                    Desenvolvimento contínuo de tecnologias para resolver desafios agrícolas.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">🤝</div>
                  <h5 className="text-success fw-bold">Colaboração</h5>
                  <p className="text-muted">
                    Trabalhando juntos com produtores, especialistas e comunidades agrícolas.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">📊</div>
                  <h5 className="text-success fw-bold">Excelência</h5>
                  <p className="text-muted">
                    Buscamos sempre a qualidade e eficiência em nossos serviços e soluções.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">📚</div>
                  <h5 className="text-success fw-bold">Educação</h5>
                  <p className="text-muted">
                    Promovemos capacitação contínua dos produtores em tecnologia e sustentabilidade.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="value-card h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <div className="value-icon mb-3">✅</div>
                  <h5 className="text-success fw-bold">Transparência</h5>
                  <p className="text-muted">
                    Comunicação clara e honesta em todos os nossos relacionamentos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
