import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Component() {
  const animationStyles = [
    {
      title: "Tradicional",
      description:
        'Dibujas a tu personaje cuadro a cuadro en un lienzo o en papel para luego pasarlos a una determinada velocidad "fps" y que este se vea en movimiento.',
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "3D",
      description:
        "Modelas a tus personajes y les añades huesos para así moverlos en un entorno virtual, si bien esta es más rápida que el 2d toma mucho más entendimiento del programa que solo dibujar, cosas a tener en cuenta como la topología el rig las influencias y los uvs, por ejemplo.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Stop motion",
      description:
        "Consiste en hacer un muñeco o títere el cual tendrás que posar fotograma a fotograma, si bien le da un toque especial es muy demandante de tiempo ya que debes hacer desde los personajes hasta los escenarios por lo cual también es muy caro de hacer.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Estilos de Animación</h2>
      <Row
        xs={1}
        md={2}
        lg={2}
        className="g-4"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {animationStyles.map((style, idx) => (
          <Col key={idx}>
            <Card className="h-100">
              <Card.Img variant="top" src={style.image} alt={style.title} />
              <Card.Body>
                <Card.Title>{style.title}</Card.Title>
                <Card.Text>{style.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
