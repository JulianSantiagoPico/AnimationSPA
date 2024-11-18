import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AnimationTermsCarousel() {
  const animationTerms = [
    "Conexión creativa",
    "Jero Designs",
    "Hierro Producciones",
    "Trineo TV",
  ];

  return (
    <div
      className="animation-terms-carousel rounded-4"
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
    >
      <h2 className="text-center mb-4 mt-4">
        Estudios de animación en Colombia
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
