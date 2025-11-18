import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';

export default function Login({ onLogin }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError(t('contact.required'));
      return;
    }

    setLoading(true);

    // Simular autenticação
    setTimeout(() => {
      // Simular login bem-sucedido (em produção, isso seria uma chamada à API)
      if (formData.email && formData.password.length >= 6) {
        onLogin(true);
        navigate('/dashboard');
      } else {
        setError(t('login.invalidCredentials'));
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <Container fluid className="px-md-4">
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col lg={5} md={8} sm={12}>
            <Card className="login-card shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <img 
                    src="/images/logo.svg" 
                    alt="SmartFarm Brasil" 
                    height="60"
                    className="mb-3"
                  />
                  <h2 className="text-success fw-bold">
                    {t('login.title')}
                  </h2>
                </div>

                {error && (
                  <Alert variant="danger" dismissible onClose={() => setError('')}>
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">
                      {t('login.email')}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      size="lg"
                      className="border-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">
                      {t('login.password')}
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      size="lg"
                      className="border-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      label={t('login.rememberMe')}
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button 
                    variant="success" 
                    type="submit"
                    size="lg"
                    className="w-100 fw-bold mb-3"
                    disabled={loading}
                  >
                    {loading ? t('common.loading') : t('login.login')}
                  </Button>
                </Form>

                <div className="text-center">
                  <p className="text-muted">
                    {t('login.noAccount')}{' '}
                    <Link to="/register" className="text-success fw-bold text-decoration-none">
                      {t('login.signup')}
                    </Link>
                  </p>
                </div>

                {/* Demo Credentials */}
                <div className="demo-credentials mt-4 p-3 bg-light rounded">
                  <small className="text-muted">
                    <strong>Demo Credentials:</strong><br/>
                    Email: demo@SmartFarm Brasil.com.br<br/>
                    Password: 123456
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
