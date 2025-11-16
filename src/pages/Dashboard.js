import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Modal, Alert, Tabs, Tab, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';

export default function Dashboard({ isLoggedIn }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('properties');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // State for Properties
  const [properties, setProperties] = useState([
    { id: 1, name: 'Propriedade A', area: 50, location: 'SP', crops: 2, status: 'Ativo' }
  ]);

  const [newProperty, setNewProperty] = useState({
    name: '',
    area: '',
    location: ''
  });

  // State for Crops
  const [crops, setCrops] = useState([
    { id: 1, name: 'Milho', propertyId: 1, plantDate: '2024-10-01', expectedHarvest: '2025-02-01', status: 'Em desenvolvimento' }
  ]);

  const [newCrop, setNewCrop] = useState({
    name: '',
    propertyId: '',
    plantDate: '',
    expectedHarvest: ''
  });

  // State for Producers
  const [producers, setProducers] = useState([
    { id: 1, name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-9999', propertyId: 1 }
  ]);

  const [newProducer, setNewProducer] = useState({
    name: '',
    email: '',
    phone: '',
    propertyId: ''
  });

  // Handlers for Properties
  const handleAddProperty = () => {
    if (newProperty.name && newProperty.area && newProperty.location) {
      setProperties([
        ...properties,
        {
          id: properties.length + 1,
          ...newProperty,
          crops: 0,
          status: 'Ativo'
        }
      ]);
      setNewProperty({ name: '', area: '', location: '' });
      setShowModal(false);
    }
  };

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  // Handlers for Crops
  const handleAddCrop = () => {
    if (newCrop.name && newCrop.propertyId && newCrop.plantDate && newCrop.expectedHarvest) {
      setCrops([
        ...crops,
        {
          id: crops.length + 1,
          ...newCrop,
          status: 'Em desenvolvimento'
        }
      ]);
      setNewCrop({ name: '', propertyId: '', plantDate: '', expectedHarvest: '' });
      setShowModal(false);
    }
  };

  const handleDeleteCrop = (id) => {
    setCrops(crops.filter(c => c.id !== id));
  };

  // Handlers for Producers
  const handleAddProducer = () => {
    if (newProducer.name && newProducer.email && newProducer.propertyId) {
      setProducers([
        ...producers,
        {
          id: producers.length + 1,
          ...newProducer
        }
      ]);
      setNewProducer({ name: '', email: '', phone: '', propertyId: '' });
      setShowModal(false);
    }
  };

  const handleDeleteProducer = (id) => {
    setProducers(producers.filter(p => p.id !== id));
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewProperty({ name: '', area: '', location: '' });
    setNewCrop({ name: '', propertyId: '', plantDate: '', expectedHarvest: '' });
    setNewProducer({ name: '', email: '', phone: '', propertyId: '' });
  };

  return (
    <div className="dashboard-page">
      <Container fluid className="px-md-4 py-5">
        {/* Header */}
        <Row className="mb-5">
          <Col lg={8} md={12}>
            <h1 className="display-5 fw-bold text-success mb-2">
              {t('dashboard.welcome')}
            </h1>
            <p className="lead text-muted">
              Gerencie suas propriedades, culturas e produtores de forma organizada e eficiente
            </p>
          </Col>
          <Col lg={4} md={12} className="text-md-end">
            <Alert variant="info" className="mb-0">
              <small>
                <strong>Dica:</strong> Use as abas abaixo para gerenciar diferentes aspectos da sua operação rural.
              </small>
            </Alert>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="mb-5">
          <Col lg={4} md={6} className="mb-3">
            <Card className="stat-card shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="stat-icon">🏞️</div>
                <h3 className="text-success fw-bold">{properties.length}</h3>
                <p className="text-muted">{t('dashboard.properties')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <Card className="stat-card shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="stat-icon">🌾</div>
                <h3 className="text-success fw-bold">{crops.length}</h3>
                <p className="text-muted">{t('dashboard.crops')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <Card className="stat-card shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="stat-icon">👨‍🌾</div>
                <h3 className="text-success fw-bold">{producers.length}</h3>
                <p className="text-muted">{t('dashboard.producers')}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Tabs */}
        <Card className="shadow-sm border-0">
          <Card.Body>
            <Tabs 
              activeKey={activeTab} 
              onSelect={(k) => setActiveTab(k)}
              className="mb-4"
            >
              {/* Properties Tab */}
              <Tab eventKey="properties" title="🏞️ Propriedades">
                <div className="tab-content pt-4">
                  <div className="mb-4">
                    <Button 
                      variant="success" 
                      onClick={() => openModal('property')}
                      className="mb-3"
                    >
                      + {t('dashboard.addProperty')}
                    </Button>
                  </div>

                  {properties.length > 0 ? (
                    <div className="table-responsive">
                      <Table hover>
                        <thead className="table-light">
                          <tr>
                            <th>{t('dashboard.name')}</th>
                            <th>{t('dashboard.area')}</th>
                            <th>{t('dashboard.location')}</th>
                            <th>Culturas</th>
                            <th>Status</th>
                            <th>{t('dashboard.actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {properties.map(prop => (
                            <tr key={prop.id}>
                              <td className="fw-bold">{prop.name}</td>
                              <td>{prop.area} ha</td>
                              <td>{prop.location}</td>
                              <td>{prop.crops}</td>
                              <td>
                                <Badge bg="success">{prop.status}</Badge>
                              </td>
                              <td>
                                <Button 
                                  variant="sm" 
                                  className="me-2"
                                  size="sm"
                                >
                                  {t('dashboard.edit')}
                                </Button>
                                <Button 
                                  variant="danger" 
                                  size="sm"
                                  onClick={() => handleDeleteProperty(prop.id)}
                                >
                                  {t('dashboard.delete')}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : (
                    <Alert variant="info">
                      Nenhuma propriedade cadastrada. Clique em "Adicionar Propriedade" para começar.
                    </Alert>
                  )}
                </div>
              </Tab>

              {/* Crops Tab */}
              <Tab eventKey="crops" title="🌾 Plantios">
                <div className="tab-content pt-4">
                  <div className="mb-4">
                    <Button 
                      variant="success" 
                      onClick={() => openModal('crop')}
                      className="mb-3"
                    >
                      + {t('dashboard.addCrop')}
                    </Button>
                  </div>

                  {crops.length > 0 ? (
                    <div className="table-responsive">
                      <Table hover>
                        <thead className="table-light">
                          <tr>
                            <th>{t('dashboard.cropName')}</th>
                            <th>Propriedade</th>
                            <th>{t('dashboard.plantDate')}</th>
                            <th>{t('dashboard.expectedHarvest')}</th>
                            <th>{t('dashboard.status')}</th>
                            <th>{t('dashboard.actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {crops.map(crop => (
                            <tr key={crop.id}>
                              <td className="fw-bold">{crop.name}</td>
                              <td>{properties.find(p => p.id === parseInt(crop.propertyId))?.name || 'N/A'}</td>
                              <td>{crop.plantDate}</td>
                              <td>{crop.expectedHarvest}</td>
                              <td>
                                <Badge bg="info">{crop.status}</Badge>
                              </td>
                              <td>
                                <Button 
                                  variant="sm" 
                                  className="me-2"
                                  size="sm"
                                >
                                  {t('dashboard.edit')}
                                </Button>
                                <Button 
                                  variant="danger" 
                                  size="sm"
                                  onClick={() => handleDeleteCrop(crop.id)}
                                >
                                  {t('dashboard.delete')}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : (
                    <Alert variant="info">
                      Nenhum plantio cadastrado. Clique em "Adicionar Plantio" para começar.
                    </Alert>
                  )}
                </div>
              </Tab>

              {/* Producers Tab */}
              <Tab eventKey="producers" title="👨‍🌾 Produtores">
                <div className="tab-content pt-4">
                  <div className="mb-4">
                    <Button 
                      variant="success" 
                      onClick={() => openModal('producer')}
                      className="mb-3"
                    >
                      + {t('dashboard.addProducer')}
                    </Button>
                  </div>

                  {producers.length > 0 ? (
                    <div className="table-responsive">
                      <Table hover>
                        <thead className="table-light">
                          <tr>
                            <th>{t('dashboard.name')}</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Propriedade</th>
                            <th>{t('dashboard.actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {producers.map(prod => (
                            <tr key={prod.id}>
                              <td className="fw-bold">{prod.name}</td>
                              <td>{prod.email}</td>
                              <td>{prod.phone}</td>
                              <td>{properties.find(p => p.id === parseInt(prod.propertyId))?.name || 'N/A'}</td>
                              <td>
                                <Button 
                                  variant="sm" 
                                  className="me-2"
                                  size="sm"
                                >
                                  {t('dashboard.edit')}
                                </Button>
                                <Button 
                                  variant="danger" 
                                  size="sm"
                                  onClick={() => handleDeleteProducer(prod.id)}
                                >
                                  {t('dashboard.delete')}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : (
                    <Alert variant="info">
                      Nenhum produtor cadastrado. Clique em "Adicionar Produtor" para começar.
                    </Alert>
                  )}
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'property' && t('dashboard.addProperty')}
            {modalType === 'crop' && t('dashboard.addCrop')}
            {modalType === 'producer' && t('dashboard.addProducer')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === 'property' && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.name')}</Form.Label>
                <Form.Control
                  type="text"
                  value={newProperty.name}
                  onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                  placeholder="Ex: Propriedade Principal"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.area')}</Form.Label>
                <Form.Control
                  type="number"
                  value={newProperty.area}
                  onChange={(e) => setNewProperty({...newProperty, area: e.target.value})}
                  placeholder="Ex: 50"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.location')}</Form.Label>
                <Form.Control
                  type="text"
                  value={newProperty.location}
                  onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                  placeholder="Ex: São Paulo, SP"
                />
              </Form.Group>
            </Form>
          )}

          {modalType === 'crop' && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.cropName')}</Form.Label>
                <Form.Control
                  type="text"
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({...newCrop, name: e.target.value})}
                  placeholder="Ex: Milho"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Propriedade</Form.Label>
                <Form.Select
                  value={newCrop.propertyId}
                  onChange={(e) => setNewCrop({...newCrop, propertyId: e.target.value})}
                >
                  <option value="">Selecione uma propriedade</option>
                  {properties.map(prop => (
                    <option key={prop.id} value={prop.id}>{prop.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.plantDate')}</Form.Label>
                <Form.Control
                  type="date"
                  value={newCrop.plantDate}
                  onChange={(e) => setNewCrop({...newCrop, plantDate: e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.expectedHarvest')}</Form.Label>
                <Form.Control
                  type="date"
                  value={newCrop.expectedHarvest}
                  onChange={(e) => setNewCrop({...newCrop, expectedHarvest: e.target.value})}
                />
              </Form.Group>
            </Form>
          )}

          {modalType === 'producer' && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>{t('dashboard.name')}</Form.Label>
                <Form.Control
                  type="text"
                  value={newProducer.name}
                  onChange={(e) => setNewProducer({...newProducer, name: e.target.value})}
                  placeholder="Ex: João Silva"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={newProducer.email}
                  onChange={(e) => setNewProducer({...newProducer, email: e.target.value})}
                  placeholder="Ex: joao@email.com"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="tel"
                  value={newProducer.phone}
                  onChange={(e) => setNewProducer({...newProducer, phone: e.target.value})}
                  placeholder="Ex: (11) 99999-9999"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Propriedade</Form.Label>
                <Form.Select
                  value={newProducer.propertyId}
                  onChange={(e) => setNewProducer({...newProducer, propertyId: e.target.value})}
                >
                  <option value="">Selecione uma propriedade</option>
                  {properties.map(prop => (
                    <option key={prop.id} value={prop.id}>{prop.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            {t('dashboard.cancel')}
          </Button>
          <Button 
            variant="success" 
            onClick={() => {
              if (modalType === 'property') handleAddProperty();
              if (modalType === 'crop') handleAddCrop();
              if (modalType === 'producer') handleAddProducer();
            }}
          >
            {t('dashboard.save')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
