import React, { useState } from "react";
import {
  Button,
  Form,
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationCarrousel from "./AnimationTermsCarousel2";
import StudiosCarrousel from "./AnimationTermsCarousel";
import AnimationImage from "./Assets/lt_dan_walk_planning_sheet (1) (1).jpg";
import Taller5 from "./Assets/logo-t5.png";
import Utadeo from "./Assets/universidad-jorge-tadeo-lozano-logo-5E360D8B1F-seeklogo.com.png";
import Universitaria from "./Assets/images.jpg";
import Sena from "./Assets/logo sena (1).jpg";
import MayorCundinamarca from "./Assets/universidad-colegio-mayor-de-cundinamarca_550x420.jpg";

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "ValSierra" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: ".5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#que-es">Animación para todos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLoggedIn ? (
                <>
                  <Nav.Link href="#que-es">¿Qué es?</Nav.Link>
                  <Nav.Link href="#estilos">Estilos</Nav.Link>
                  <Nav.Link href="#terminos">Terminos</Nav.Link>
                  <Nav.Link href="#historia">Historia</Nav.Link>
                  <Nav.Link href="#estudios">Estudios</Nav.Link>
                  <Nav.Link href="#programas">Programas</Nav.Link>
                  <Nav.Link href="#noticias">Noticias</Nav.Link>
                  <Nav.Link href="#lugares">Donde estudiar?</Nav.Link>
                </>
              ) : (
                <Nav.Link href="#login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              maxWidth: "400px",
              padding: "3rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              width: "100dvw",
            }}
          >
            <Card.Title className="text-center mb-4">Iniciar sesión</Card.Title>
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
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Row>
            <Col>
              {/* Que es la animacion? */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  height: "100vh",
                  padding: "10rem",
                  display: "flex",
                  flexDirection: "column",
                }}
                id="que-es"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "0.5rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={AnimationImage}
                      className="image-fluid"
                      alt="Que es la animación"
                    ></img>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(137, 196, 244, 0.5)",
                      padding: "3rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                      width: "40vw",
                    }}
                    className="rounded-4"
                  >
                    <h2>¿Qué es la animación?</h2>
                    <p className="fs-6">
                      La animación es una técnica artística que consiste en dar
                      vida y movimiento a imágenes o elementos inanimados. Esto
                      se logra mediante la creación de una serie de imágenes
                      sucesivas que, al reproducirse rápidamente, generan la
                      ilusión de movimiento. Es utilizada en cine, televisión,
                      videojuegos y publicidad, con estilos como el dibujo
                      tradicional, 3D y stop motion.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Estilos de animacion */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10rem",
                  flexDirection: "column",
                  marginTop: "4rem",
                }}
                id="estilos"
              >
                <h2 className="text-center p-4">Estilos de animación</h2>
                <div
                  style={{
                    display: "flex",
                    gap: "4rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    padding: "2rem 4rem 2rem 4rem",
                    backgroundColor: "rgba(255, 255, 126)",
                  }}
                  className="rounded-4"
                >
                  <div className="text-center" style={{ width: "30vw" }}>
                    <h3 className="fs-4">Dibujo tradicional</h3>
                    <p>
                      El dibujo tradicional en animación se realiza creando una
                      serie de ilustraciones a mano, usualmente sobre papel o
                      acetato, para formar una secuencia que genera la ilusión
                      de movimiento. Este estilo es característico por su
                      enfoque artesanal y su estética única, siendo usado en
                      clásicos como las películas de Disney.
                    </p>
                  </div>
                  <div className="text-center" style={{ width: "30vw" }}>
                    <h3 className="fs-4">Animación 3D</h3>
                    <p>
                      Modelas a tus personajes y les añades huesos para así
                      moverlos en un entorno virtual, si bien esta es más rápida
                      que el 2d toma mucho más entendimiento del programa que
                      solo dibujar, cosas a tener en cuenta como la topología el
                      rig las influencias y los uvs, por ejemplo.
                    </p>
                  </div>
                  <div className="text-center" style={{ width: "30vw" }}>
                    <h3 className="fs-4">Stop motion</h3>
                    <p>
                      El stop motion es una técnica de animación que consiste en
                      fotografiar objetos físicos, como muñecos o figuras,
                      moviéndolos ligeramente entre cada toma. Cuando se
                      reproducen las imágenes en secuencia, se crea la ilusión
                      de movimiento. Es popular por su textura artesanal y su
                      estilo único.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Terminos basicos de animacion */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=""
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(137, 196, 244, 0.7)",
                  justifyContent: "center",
                }}
                id="terminos"
              >
                <AnimationCarrousel />
              </motion.section>

              {/* Historia de la animacion en colombia */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10rem",
                  flexDirection: "column",
                }}
                id="historia"
              >
                <h2 className="text-center p-4" style={{ marginTop: "2rem" }}>
                  Historia de la animación en Colombia
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    padding: "2rem 4rem 2rem 4rem",
                    backgroundColor: "rgba(255, 255, 126)",
                  }}
                  className="fs-6 rounded-4"
                >
                  <p>
                    La animación en Colombia tiene sus inicios en los años 80,
                    principalmente en la publicidad, donde se utilizaban
                    técnicas tradicionales para crear comerciales. Estos
                    primeros proyectos sentaron las bases para el desarrollo de
                    la industria en el país.
                  </p>
                  <p>
                    En 2010, el largometraje "Pequeñas voces" marcó un antes y
                    un después al abordar temas sociales como el conflicto
                    armado, utilizando una combinación de animación y
                    testimonios reales. Este hito demostró el potencial de la
                    animación colombiana para contar historias profundas y
                    originales.
                  </p>
                  <p>
                    Con el tiempo, el avance de las herramientas digitales
                    permitió la creación de producciones más sofisticadas.
                    Películas como "El libro de Lila" (2017) llevaron el talento
                    colombiano a festivales internacionales, destacándose por su
                    calidad artística y su narrativa única.
                  </p>
                  <p>
                    En la actualidad, la animación en Colombia se ha
                    diversificado. Estudios locales producen contenido para
                    plataformas de streaming, cine, publicidad y videojuegos,
                    explorando desde temas culturales hasta propuestas
                    innovadoras. Este crecimiento refleja el auge de la
                    industria creativa en el país y el reconocimiento del
                    talento colombiano a nivel global.
                  </p>
                </div>
              </motion.section>

              {/* Estudios de animacion colombianos */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(241, 130, 141, 0.7)",
                  justifyContent: "center",
                }}
                id="estudios"
              >
                <StudiosCarrousel />
              </motion.section>

              {/* Programas para animar */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                style={{
                  height: "100vh",
                  padding: "0 10rem",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                id="programas"
              >
                <h2 className="text-center">Programas para animar</h2>
                <Row
                  style={{
                    display: "flex",
                    gap: "3rem",
                    margin: "2rem 0",
                    height: "25vh",
                  }}
                >
                  <Col
                    md={6}
                    style={{
                      backgroundColor: "rgba(255, 255, 126)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",

                      width: "30vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="rounded-4"
                  >
                    <h3 className="text-center">Android</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ul>
                        <li>Flipaclip </li>
                        <li>Ibis </li>
                        <li>Animatic </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    style={{
                      backgroundColor: "rgba(137, 196, 244, 0.7)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",

                      width: "30vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="rounded-4"
                  >
                    <h3 className="text-center">iOS</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ul>
                        <li>Procreate </li>
                        <li>Flipaclip </li>
                        <li>Rough animator</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    gap: "3rem",
                    margin: "1rem 0",
                    height: "25vh",
                  }}
                >
                  <Col
                    md={6}
                    style={{
                      backgroundColor: "rgba(241, 130, 141, 0.7)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                      width: "30vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="rounded-4"
                  >
                    <h3 className="text-center">Windows</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ul>
                        <li>Krita </li>
                        <li>Clip studio </li>
                        <li>Blender </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    style={{
                      backgroundColor: "rgba(255, 255, 126)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",

                      width: "30vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="rounded-4"
                  >
                    <h3 className="text-center">Mac</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ul>
                        <li>Opentoons </li>
                        <li>Krita </li>
                        <li>Blender </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </motion.section>

              {/* Noticias de animacion */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{
                  height: "100vh",
                  padding: "0 20rem 0 20rem",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(137, 196, 244, 0.7)",
                }}
                id="noticias"
              >
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4rem 10rem",
                    width: "75vw",
                  }}
                  className="rounded-4"
                >
                  <h2 className="text-center">Noticias de la animación</h2>

                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                    }}
                    className="my-4"
                  >
                    <Button
                      onClick={handleShow}
                      style={{
                        backgroundColor: "rgba(255, 255, 126)",
                        borderColor: "rgba(255, 255, 126)",
                        padding: "0 2rem 0 2rem",
                        color: "black",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                        width: "30vw",
                      }}
                      className="py-4"
                    >
                      Bring it on! El anime que pretende llevar a lo más alto la
                      animación colombiana.
                    </Button>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      centered
                      scrollable
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Bring it on! El anime que pretende llevar a lo más
                          alto la animación colombiana.
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="p-4">
                          Hablar de anime producido en Colombia es un tema
                          complejo, especialmente porque la producción nacional
                          ha tenido altibajos significativos. Un caso notable
                          fue Bolívar el Héroe, un intento de anime colombiano
                          que generó tanta controversia que incluso circulan
                          rumores de que la obra fue llevada a Japón y destruida
                          por expertos. A pesar de estos tropiezos, Colombia es
                          uno de los países con mayor consumo de anime a nivel
                          mundial, y para muchos jóvenes, crear su propio anime
                          sigue siendo un sueño.
                          <br /> <br />
                          Un ejemplo reciente es el trabajo de un joven conocido
                          como Geist, quien ha estado desarrollando su proyecto
                          desde los 15 años. "Todo comenzó en la pandemia; no
                          tenía nada que hacer, así que agarré un lápiz y empecé
                          a dibujar", comentó Geist, entre risas, al ser
                          entrevistado. Inicialmente planeó su idea como un
                          cómic o un videojuego, pero finalmente optó por crear
                          una serie animada: "No sé mucho de programación ni de
                          viñetas, pero animar es algo que puedo hacer. Aunque
                          tome más tiempo, es más fácil para mí poner mis ideas
                          en el papel".
                          <br /> <br />
                          Su anime, categorizado como shōnen, cuenta la historia
                          de Zeo, un joven que aspira a convertirse en el
                          luchador más fuerte del mundo. La trama se desarrolla
                          en un universo donde los humanos han desaparecido y su
                          lugar lo ocupan los Sukubun, los nuevos habitantes del
                          planeta. Geist también promete explorar temas
                          profundos como el destino de la humanidad y los
                          misterios del pasado de este mundo, aunque prefiere no
                          revelar más detalles para mantener el interés de los
                          espectadores.
                          <br /> <br />
                          El estilo visual de Geist se aleja del anime moderno y
                          toma inspiración de los primeros animes, como Raponchi
                          la Rana Valiente, mezclado con influencias de artistas
                          como Diives. "Mi estilo puede parecer diferente, pero
                          lo considero anime por el método de producción, que
                          sigue más el estándar japonés que el americano",
                          explicó.
                          <br /> <br />
                          La industria de animadores latinos sigue creciendo, y
                          proyectos como el de Geist son un ejemplo del talento
                          emergente en la región. Estamos emocionados de
                          presenciar esta revolución y seguiremos informando
                          sobre las novedades de este hermoso arte que refleja
                          las ideas más profundas de sus creadores.
                        </div>
                      </Modal.Body>
                    </Modal>

                    <Button
                      onClick={handleShow1}
                      style={{
                        backgroundColor: "rgba(241, 130, 141, 0.7)",
                        borderColor: "rgba(241, 130, 141, 0.7)",
                        padding: "0 2rem 0 2rem",
                        color: "black",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                        width: "30vw",
                      }}
                      className="py-4"
                    >
                      El Legado de “El Siguiente Programa” en la Animación
                      Colombiana.
                    </Button>

                    <Modal
                      show={show1}
                      onHide={handleClose1}
                      size="lg"
                      centered
                      scrollable
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          El Legado de “El Siguiente Programa” en la Animación
                          Colombiana.
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="p-4">
                          Hablar de animación en Colombia es mencionar a
                          Conexión Creativa, el estudio detrás de icónicas
                          producciones como El Profesor Súper O y Betty Toons.
                          Sin embargo, su ópera prima, El Siguiente Programa,
                          demostró que en la animación, la sustancia puede
                          superar al estilo.
                          <br /> <br />
                          El Siguiente Programa nació como una continuación del
                          polémico programa La Tele (1993), conducido por Martín
                          de Francisco y Santiago Moure. Tras su cancelación, y
                          con influencias de series como Beavis y Butt-Head de
                          MTV, los hermanos Zajec decidieron crear una versión
                          colombiana que reflejara la idiosincrasia local. Según
                          Hernán Zajec, la producción comenzó con recursos
                          mínimos: “Nos tocaba dibujar todo en papel y luego
                          escanearlo. No teníamos presupuesto para un
                          departamento de entintado y coloreado, mucho menos
                          para materiales”.
                          <br /> <br />
                          Milagrosamente, el proyecto fue financiado por un
                          canal jesuita, donde la serie se convirtió en un éxito
                          rotundo. "El programa salía los viernes y la gente
                          seguía hablando de él los lunes", recuerda Zajec. A
                          pesar de su bajo presupuesto, incluso para los
                          estándares de la animación colombiana, la serie logró
                          capturar la atención del público y convertirse en un
                          ícono cultural nacional.
                          <br /> <br />
                          El impacto de El Siguiente Programa sigue vigente,
                          inspirando a nuevas generaciones de animadores en
                          Colombia. Producciones actuales como 4 Extraños en DC
                          y Desocupe Masivo pueden considerarse herederas de
                          este pionero de la animación colombiana.
                          <br /> <br />
                          El camino no ha sido fácil, pero con proyectos como
                          este, la animación en Colombia continúa creciendo.
                          Quizás algún día podamos rivalizar con gigantes como
                          Disney o Warner, mostrando al mundo el inmenso talento
                          creativo de nuestro país.
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </motion.section>

              {/* Lugares donde enseñan animacion */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10rem",
                }}
                id="lugares"
              >
                <h2>Lugares donde enseñan sobre animación en Colombia</h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    overflow: "auto",
                    gap: "2rem",
                    margin: "2rem 0 1rem 0",
                  }}
                >
                  <img
                    src={Taller5}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      height: "100px",
                    }}
                    className="img-fluid"
                    alt="Taller 5"
                  ></img>
                  <img
                    src={Utadeo}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      height: "100px",
                    }}
                    alt="Utadeo"
                  ></img>
                  <img
                    src={Universitaria}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      height: "100px",
                    }}
                    alt="Universitaria de colombia"
                  ></img>
                  <img
                    src={Sena}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      height: "100px",
                    }}
                    alt="Sena"
                  ></img>
                  <img
                    src={MayorCundinamarca}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      height: "100px",
                    }}
                    alt="Mayor de Cundinamarca"
                  ></img>
                </div>
              </motion.section>
            </Col>
          </Row>
        </motion.div>
      )}
    </div>
  );
}
