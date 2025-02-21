import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DepthOfFieldCalculator from "./components/DepthOfFieldCalculator";

// Dummypictures: https://dummyimage.com/900x400/000000/fff.jpg&text=Hello+Image

function App() {
  return (
    <>
      <div>
        <header></header>
        <main>
          <Container className="px-9 my-5">
            <Row>
              <Col className="text-bg-dark p-3">
                <h1>DEPTH OF FIELD (DOF) CALCULATOR</h1>
              </Col>
            </Row>
          </Container>
          <Container className="px-4 my-5">
            <Col className=" text-bg-secondary p-3">
              <Row>
                <DepthOfFieldCalculator />
              </Row>
            </Col>
          </Container>
        </main>
        <footer className="py-5 my-5 bg-blue">
          <Container className="px-4">
            <p className="text-center text-white">
              Copyright &copy; dof.cptcapture.de 2025
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
