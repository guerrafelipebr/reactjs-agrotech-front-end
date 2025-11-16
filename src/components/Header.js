import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header({ isLoggedIn, onLogout }) {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar-shadow">
        <Container fluid className="px-md-4">
            <Navbar.Brand as={Link} to="/" className="brand-logo">
                <img 
                    src="/images/logo.svg" 
                    alt="AgroTech Logo" 
                    height="50" 
                    className="me-2"
                />
                <span className="brand-text">AgroTech</span>
            </Navbar.Brand>
            <Navbar.Toggle 
                aria-controls="basic-navbar-nav" 
                onClick={() => setExpanded(expanded ? false : true)}
            />
            <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
                <Nav className="ms-auto align-items-md-center">
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                        {t('nav.home')}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
                        {t('nav.services')}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                        {t('nav.about')}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                        {t('nav.contact')}
                    </Nav.Link>

                    {!isLoggedIn ? (
                        <>
                            <Nav.Item className="ms-2">
                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="success"
                                    size="sm"
                                    onClick={() => setExpanded(false)}
                                    className="px-3 d-flex align-items-center"
                                >
                                    <span className="me-2 d-flex align-items-center" aria-hidden="true">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 0 0-1 1v2h1V3h6v10H6v-2H5v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6z"/>
                                            <path fillRule="evenodd" d="M1.5 8a.5.5 0 0 1 .5-.5H9.293L7.146 5.354a.5.5 0 1 1 .708-.708l3 3a.498.498 0 0 1 .146.351.498.498 0 0 1-.146.351l-3 3a.5.5 0 0 1-.708-.708L9.293 8.5H2a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </span>
                                    {t('nav.login')}
                                </Button>
                            </Nav.Item>
                        </>
                    ) : (
                        <>
                            <Nav.Item className="ms-2">
                                <Button
                                    as={Link}
                                    to="/dashboard"
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={() => setExpanded(false)}
                                    className="px-3 d-flex align-items-center"
                                >
                                    <span className="me-2 d-flex align-items-center" aria-hidden="true">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M2 2h4v4H2V2zm0 6h4v4H2V8zm6-6h4v4H8V2zm0 6h4v4H8V8z"/>
                                        </svg>
                                    </span>
                                    {t('nav.dashboard')}
                                </Button>
                            </Nav.Item>

                            <Nav.Item className="ms-2">
                                <Button
                                    as={Link}
                                    to="/"
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => {
                                        onLogout();
                                        setExpanded(false);
                                    }}
                                    className="px-3 d-flex align-items-center"
                                >
                                    <span className="me-2 d-flex align-items-center" aria-hidden="true">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path fillRule="evenodd" d="M6.5 1.5A1.5 1.5 0 0 0 5 3v10a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 13 13V3a1.5 1.5 0 0 0-1.5-1.5h-5zM9 8.5H3.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.498.498 0 0 1-.146-.351c0-.13.05-.26.146-.351l2-2a.5.5 0 1 1 .708.708L3.707 7.5H9a.5.5 0 0 1 0 1z"/>
                                        </svg>
                                    </span>
                                    {t('nav.logout')}
                                </Button>
                            </Nav.Item>
                        </>
                    )}

                    <div className="language-switcher ms-3">
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="outline-primary" id="language-dropdown" size="sm" className="d-flex align-items-center">
                                <span className="me-1" role="img" aria-label="globe" style={{ color: '#28a745' }}>🌐</span>
                                <span className="me-2">{i18n.language === 'pt-BR' ? 'PT' : 'EN'}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    active={i18n.language === 'pt-BR'}
                                    onClick={() => {
                                        handleLanguageChange('pt-BR');
                                        setExpanded(false);
                                    }}
                                >
                                    <div className="d-flex align-items-center w-100">
                                        <span role="img" aria-label="Brazil flag" className="me-2" style={{ color: i18n.language === 'pt-BR' ? '#28a745' : 'inherit' }}>🇧🇷</span>
                                        <div className="flex-grow-1">PT - Português (BR)</div>
                                        {i18n.language === 'pt-BR' && <span className="text-primary ms-2">✓</span>}
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    active={i18n.language === 'en'}
                                    onClick={() => {
                                        handleLanguageChange('en');
                                        setExpanded(false);
                                    }}
                                >
                                    <div className="d-flex align-items-center w-100">
                                        <span role="img" aria-label="US flag" className="me-2" style={{ color: i18n.language === 'en' ? '#28a745' : 'inherit' }}>🇺🇸</span>
                                        <div className="flex-grow-1">EN - English</div>
                                        {i18n.language === 'en' && <span className="text-primary ms-2">✓</span>}
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
