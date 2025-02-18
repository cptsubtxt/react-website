import { useState } from "react";

import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";

// Dummypictures: https://dummyimage.com/900x400/000000/fff.jpg&text=Hello+Image

function App() {
  return (
    <>
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <Container className="px-4 my-5">
            <Row>
              <Col sm={7}>
                <Image
                  src="https://picsum.photos/900/400"
                  fluid
                  rounded
                  className=""
                />
              </Col>
              <Col sm={5}>
                <h1 className="font-weigh-light">Tagline</h1>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <Button variant="outline-primary">Call to action</Button>
              </Col>
            </Row>

            <Row className="mt-5">
              {/* This Row now contains ALL the cards */}
              <Col md={4}>
                {/* Adjust md value for responsiveness */}
                <Card style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="https://picsum.photos/id/200/320/200"
                  />
                  <CardBody>
                    <CardTitle>Card Title 1</CardTitle> {/* Added a title */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    {/* Added text */}
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                {/* Adjust md value for responsiveness */}
                <Card style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="https://picsum.photos/id/200/320/200"
                  />
                  <CardBody>
                    <CardTitle>Card Title 2</CardTitle> {/* Added a title */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    {/* Added text */}
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                {/* Adjust md value for responsiveness */}
                <Card style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="https://picsum.photos/id/200/320/200"
                  />
                  <CardBody>
                    <CardTitle>Card Title 3</CardTitle> {/* Added a title */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    {/* Added text */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="py-5 my-5 bg-dark">
          <Container className="px-4">
            <p className="text-center text-white">
              Copyright &copy; Your website 2025
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
