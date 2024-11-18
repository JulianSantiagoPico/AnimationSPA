import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import styles from "./Component.module.css";
import AnimationCards from "./animation-styles";
import AnimationCarrousel from "./AnimationTermsCarousel";
import animationImg from "./Assets/lt_dan_walk_planning_sheet (1).jpg";

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "ValSierra" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.container}>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className={styles.navbar}
      >
        <Container>
          <Navbar.Brand href="#home">Animación en Colombia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLoggedIn ? (
                <>
                  <Nav.Link href="#que-es">¿Qué es?</Nav.Link>
                  <Nav.Link href="#terminos">Términos</Nav.Link>
                  <Nav.Link href="#lugares">Lugares</Nav.Link>
                  <Nav.Link href="#historia">Historia</Nav.Link>
                  <Nav.Link href="#estudios">Estudios</Nav.Link>
                  <Nav.Link href="#programas">Programas</Nav.Link>
                  <Nav.Link href="#noticias">Noticias</Nav.Link>
                  <Nav.Link href="#estilos">Estilos</Nav.Link>
                </>
              ) : (
                <Nav.Link href="#login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={styles.card}>
              <Card.Title className="text-center mb-4">
                Iniciar sesión
              </Card.Title>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>
              </Form>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Row>
              <Col>
                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(000, 0, 0, 0.3)",
                    height: "98vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <h2 id="que-es">¿Qué es la animación?</h2>
                      <p>
                        La animación es la técnica que da sensación de
                        movimiento a imágenes, dibujos, figuras, recortes,
                        objetos, personas, imágenes computarizadas,
                        fotografiando o utilizando minúsculos cambios de
                        posición para que, por un fenómeno de persistencia de la
                        visión, el ojo humano capte el proceso como un
                        movimiento real.
                      </p>
                    </div>
                    <div>
                      <img
                        src={animationImg}
                        className="img-fluid"
                        alt="Animation"
                        max-width="100%"
                      ></img>
                    </div>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-5"
                  style={{
                    backgroundColor: "wheat",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AnimationCarrousel />
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="p-5"
                  style={{
                    backgroundColor: "white",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 id="lugares">
                    Lugares donde enseñan sobre animación en Colombia
                  </h2>
                  <ul>
                    <li>Taller 5 profesional en animación</li>
                    <li>Utadeo profesional en animación</li>
                    <li>Universitaria de colombia técnico en animación</li>
                    <li>SENA: tecnico en animacion</li>
                    <li>Mayor de cundinamarca: profesional en animación</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="p-5"
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 id="historia">Historia de la animación en Colombia</h2>
                  <p>
                    Nace en los años 20, pero se empieza a tomar en serio hasta
                    el 97 con el nacimiento del siguiente programa y llega a su
                    punto máximo en la década de los 2000 de mano de series como
                    "el profesor super O" y "betty toons" sin embargo su declive
                    comenzó en la década del 2010 y tuvo su renacimiento en la
                    web con series como desocupe masivo y vida pública.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="p-5"
                  style={{
                    backgroundColor: "red<",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 id="estudios">Estudios de animación colombianos</h2>
                  <ul>
                    <li>Conexion creativa</li>
                    <li>Jero designs</li>
                    <li>Hierro producciones</li>
                    <li>Trineo TV</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(24, 21, 27, 0.5)",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 id="programas">Programas para animar</h2>
                  <Row>
                    <Col md={6}>
                      <h3>Android:</h3>
                      <ul>
                        <li>Flipaclip (gratis)</li>
                        <li>Ibis (gratis)</li>
                        <li>Animatic (gratis)</li>
                        <li>Mooltik (gratis)</li>
                        <li>Rough animator (paga)</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h3>iOS:</h3>
                      <ul>
                        <li>Procreate (gratis)</li>
                        <li>Flipaclip (gratis)</li>
                        <li>Rough animator</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <h3>Windows:</h3>
                      <ul>
                        <li>Opentoons (gratis)</li>
                        <li>Krita (gratis)</li>
                        <li>Clip studio (paga)</li>
                        <li>Blender (paga)</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h3>Mac:</h3>
                      <ul>
                        <li>Opentoons (gratis)</li>
                        <li>Krita (gratis)</li>
                        <li>Blender (gratis)</li>
                      </ul>
                    </Col>
                  </Row>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(24, 21, 27, 0.5)",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 id="noticias">Noticias de la animación</h2>
                  <h3>
                    Bring it on! El anime que pretende llevar a lo más alto la
                    animación colombiana
                  </h3>
                  <p>
                    Hablar de anime en Colombia es complicado especialmente de
                    anime producido en el país ya que este nació y murió por
                    culpa de Bolívar el héroe...
                  </p>
                  <h3>El siguiente programa cuando la sustancia lo es todo</h3>
                  <p>
                    Hablar de animación en Colombia es hablar de conexión
                    creativa estudio detrás de series icónicas como el profesor
                    super O y betty toons...
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(24, 21, 27, 0.5)",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <AnimationCards
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </motion.section>
              </Col>
            </Row>
          </motion.div>
        )}
      </Container>

      <footer className={styles.footer}>
        <Container>
          <p>
            &copy; 2023 Animación en Colombia. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}
