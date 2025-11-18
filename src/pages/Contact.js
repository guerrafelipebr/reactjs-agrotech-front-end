import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.invalidEmail');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.required');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.required');
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Simular envio do formulário
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="hero-section py-5 bg-success text-white">
        <Container fluid className="px-md-4">
          <Row className="align-items-center text-center">
            <Col lg={12} md={12}>
              <h1 className="display-4 fw-bold text-white mb-3">
                {t('contact.title')}
              </h1>
              <p className="lead text-white">
                {t('contact.subtitle')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-content py-5">
        <Container fluid className="px-md-4">
          <Row>
            {/* Contact Form */}
            <Col lg={7} md={12} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <h3 className="text-success fw-bold mb-4">
                    {t('contact.form')}
                  </h3>

                  {submitted && (
                    <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
                      ✓ {t('contact.sent')}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        {t('contact.name')} *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'is-invalid' : ''}
                        placeholder={t('contact.name')}
                      />
                      {errors.name && (
                        <Form.Control.Feedback type="invalid" className="d-block">
                          {errors.name}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        {t('contact.email')} *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'is-invalid' : ''}
                        placeholder={t('contact.email')}
                      />
                      {errors.email && (
                        <Form.Control.Feedback type="invalid" className="d-block">
                          {errors.email}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        {t('contact.phone')}
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.phone')}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        {t('contact.subject')} *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? 'is-invalid' : ''}
                        placeholder={t('contact.subject')}
                      />
                      {errors.subject && (
                        <Form.Control.Feedback type="invalid" className="d-block">
                          {errors.subject}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        {t('contact.message')} *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'is-invalid' : ''}
                        placeholder={t('contact.message')}
                      />
                      {errors.message && (
                        <Form.Control.Feedback type="invalid" className="d-block">
                          {errors.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Button 
                      variant="success" 
                      type="submit"
                      size="lg"
                      className="w-100"
                    >
                      {t('contact.send')}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info */}
            <Col lg={5} md={12}>
              <Card className="info-card shadow-sm border-0 mb-4">
                <Card.Body className="p-4">
                  <h5 className="text-success fw-bold mb-3">
                    📞 {t('footer.phone')}
                  </h5>
                  <p className="text-muted">
                    (11) 3000-0000<br/>
                    (11) 9 9999-9999
                  </p>
                </Card.Body>
              </Card>

              <Card className="info-card shadow-sm border-0 mb-4">
                <Card.Body className="p-4">
                  <h5 className="text-success fw-bold mb-3">
                    📧 {t('footer.email')}
                  </h5>
                  <p className="text-muted">
                    info@smartfarmbrasil.com.br<br/>
                    support@smartfarmbrasil.com.br
                  </p>
                </Card.Body>
              </Card>

              <Card className="info-card shadow-sm border-0 mb-4">
                <Card.Body className="p-4">
                  <h5 className="text-success fw-bold mb-3">
                    📍 {t('footer.address')}
                  </h5>
                  <p className="text-muted">
                    Av. Paulista, 1000<br/>
                    São Paulo, SP - 01311-100<br/>
                    Brasil
                  </p>
                </Card.Body>
              </Card>

              <Card className="info-card shadow-sm border-0">
                <Card.Body className="p-4">
                  <h5 className="text-success fw-bold mb-3">
                    ⏰ Horário de Atendimento
                  </h5>
                  <p className="text-muted">
                    Segunda a Sexta: 08h - 18h<br/>
                    Sábado: 09h - 13h<br/>
                    Domingo: Fechado
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section (placeholder) */}
      <section className="contact-map py-5 bg-light">
        <Container fluid className="px-md-4">
          <Row>
            <Col lg={12}>
              <h3 className="text-success fw-bold mb-4 text-center">
                Localização
              </h3>
              <div className="map-container">
                <iframe
                  title="SmartFarm Brasil Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8482627236787!2d-46.65716882346823!3d-23.561414872073408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0edb6d%3A0x92f51c1f39673c5d!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
