import "./App.css";
import { Col, Container, Row } from 'react-bootstrap';
import { NavbarComponent, Masukan, ListCategories } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>Daftar Produk</h4>
            </Col>
            <Masukan />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;