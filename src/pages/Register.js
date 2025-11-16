import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Register.css';

export default function Register({ onRegister }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('contact.required');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('contact.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.invalidEmail');
    }

    if (!formData.password) {
      newErrors.password = t('contact.required');
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('register.passwordMismatch');
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você deve aceitar os termos';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      // Simular registro
      setTimeout(() => {
        setSuccess(true);
        
        // Redirecionar para login após 2 segundos
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        
        setLoading(false);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register-page">
      <Container fluid className="px-md-4">
        <Row className="py-5 align-items-center justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <Card className="register-card shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <img 
                    src="/images/logo.svg" 
                    alt="AgroTech" 
                    height="60"
                    className="mb-3"
                  />
                  <h2 className="text-success fw-bold">
                    {t('register.title')}
                  </h2>
                </div>

                {success && (
                  <Alert variant="success" dismissible>
                    ✓ {t('register.success')}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          {t('register.firstName')}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder={t('register.firstName')}
                          size="lg"
                          className={`border-2 ${errors.firstName ? 'is-invalid' : ''}`}
                        />
                        {errors.firstName && (
                          <Form.Control.Feedback type="invalid" className="d-block">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          {t('register.lastName')}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder={t('register.lastName')}
                          size="lg"
                          className={`border-2 ${errors.lastName ? 'is-invalid' : ''}`}
                        />
                        {errors.lastName && (
                          <Form.Control.Feedback type="invalid" className="d-block">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">
                      {t('register.email')}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('register.email')}
                      size="lg"
                      className={`border-2 ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.email}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">
                      {t('register.phone')}
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('register.phone')}
                      size="lg"
                      className="border-2"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          {t('register.password')}
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          size="lg"
                          className={`border-2 ${errors.password ? 'is-invalid' : ''}`}
                        />
                        {errors.password && (
                          <Form.Control.Feedback type="invalid" className="d-block">
                            {errors.password}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          {t('register.confirmPassword')}
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="••••••••"
                          size="lg"
                          className={`border-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        />
                        {errors.confirmPassword && (
                          <Form.Control.Feedback type="invalid" className="d-block">
                            {errors.confirmPassword}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      label="Aceito os termos e condições"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className={errors.acceptTerms ? 'is-invalid' : ''}
                    />
                    {errors.acceptTerms && (
                      <div className="invalid-feedback d-block">
                        {errors.acceptTerms}
                      </div>
                    )}
                  </Form.Group>

                  <Button 
                    variant="success" 
                    type="submit"
                    size="lg"
                    className="w-100 fw-bold mb-3"
                    disabled={loading}
                  >
                    {loading ? t('common.loading') : t('register.register')}
                  </Button>
                </Form>

                <div className="text-center">
                  <p className="text-muted">
                    {t('register.haveAccount')}{' '}
                    <Link to="/login" className="text-success fw-bold text-decoration-none">
                      {t('register.login')}
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
