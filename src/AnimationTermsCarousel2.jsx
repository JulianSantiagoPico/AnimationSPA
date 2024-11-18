import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AnimationTermsCarousel() {
  const animationTerms = [
    "Squash and stretch",
    "Anticipación",
    "Puesta en escena",
    "Dibujo directo o pose a pose",
    "Solapamiento",
    "Slow in and slow out",
    "Arcos",
    "Acciones secundarias",
    "Timing",
    "Exageración",
    "Dibujo sólido",
    "Atractivo",
  ];

  return (
    <div
      className="animation-terms-carousel rounded-4"
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
    >
      <h2 className="text-center mb-4 mt-4">
        Términos básicos de la animación
      </h2>
      <Carousel
        indicators={false}
        controls={false}
        interval={1500}
        pause={false}
      >
        {animationTerms.map((term, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-flex align-items-center justify-content-center text-center"
              style={{
                height: "100px",
                backgroundColor: "inherit",
              }}
            >
              <h3>{term}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>{`
        .animation-terms-carousel {
          width: 70vw;
          background-color: white;
          padding: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
