import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-light py-5 mt-5">
      <Container fluid className="px-md-4">
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="text-success mb-3">
                <img 
                  src="/images/logo.svg" 
                  alt="SmartFarm Brasil" 
                  height="40" 
                  className="me-2"
                />
                SmartFarm Brasil
              </h5>
              <p>
                {t('home.description')}
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="text-success mb-3">{t('footer.pages')}</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">{t('nav.home')}</Link></li>
                <li><Link to="/services" className="text-light text-decoration-none">{t('nav.services')}</Link></li>
                <li><Link to="/about" className="text-light text-decoration-none">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="text-light text-decoration-none">{t('nav.contact')}</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="text-success mb-3">{t('footer.contact')}</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="me-2">📞</span>
                  {t('footer.phone')}: (11) 3000-0000
                </li>
                <li>
                  <span className="me-2">📧</span>
                  {t('footer.email')}: info@smartFarmbrasil.com.br
                </li>
                <li>
                  <span className="me-2">📍</span>
                  {t('footer.address')}: São Paulo, SP
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="text-success mb-3">{t('footer.followUs')}</h5>
              <div className="social-links">
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">Facebook</a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">Twitter</a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">Instagram</a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="bg-secondary" />
        
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">{t('footer.rights')}</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          <a href="/" className="text-light text-decoration-none me-3">Privacy Policy</a>
          <a href="/" className="text-light text-decoration-none">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
