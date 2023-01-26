import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { axiosApi } from '../api/base';
import { AUTH } from '../api/endpoints';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import Profile from './profile';

function LoginModal() {
  const [show, setShow] = useState(false);
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [code, setCode] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const login = () => {
    const payload = {
        client_id: clientID,
        client_secret: clientSecret,
        code: code
    }
    axiosApi.post(AUTH.oauth, payload).then(resp=>{
        console.log(resp);
    })
  }

  return (
    <>
      <Button className='test' onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Client ID</Form.Label>
                <Form.Control type="text" onChange={(e) => setClientID(e.target.value)} placeholder="Enter client id" />
            </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Client Secret</Form.Label>
                <Form.Control type="text" placeholder="Enter client secret" onChange={(e) => setClientSecret(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text" placeholder="Enter code" onChange={(e) => setCode(e.target.value)}/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            <Nav.Link className='navitem' href="/profile" onClick={handleClose}> Sign In</Nav.Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginModal;