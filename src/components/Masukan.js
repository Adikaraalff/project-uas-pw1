import React, { Component } from 'react'
import {Col, Form, Button} from 'react-bootstrap'

export default class Masukan extends Component {
  render() {
    return (
      <Col md={2} mb="3">
      <h4>Masukkan Data</h4>
      <Form>
      <Form.Group className="mb-1" controlId="formBasicNama">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="email" placeholder="Masukkan Nama" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Masukkan Email" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicNohp">
        <Form.Label>No Hp</Form.Label>
        <Form.Control type="Nohp" placeholder="628xxxxxx" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="alamat">
        <Form.Label>Masukkan Alamat</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <br />
      <Form.Select aria-label="Default select example">
      <option>Silahkan Pilih Menu</option>
      <option value="1">Nasi Ayam</option>
      <option value="2">Nasi Ikan</option>
      <option value="3">Pizza</option>
    </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Col>
    )
  }
}