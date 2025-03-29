import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-300px" });

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: require("../../assets/images/projeto-api-pib.jpg"),
      description: "Descrição do Projeto 1",
    },
    {
      image: require("../../assets/images/projeto-mercado-livre.jpg"),
      description: "Descrição do Projeto 2",
    },
    {
      image: require("../../assets/images/projeto-ia-henet.png"),
      description: "Descrição do Projeto 3",
    },
    {
      image: require("../../assets/images/projeto-ep.jpeg"),
      description: "Descrição do Projeto 4",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section id="projetos" className="containerProjects" ref={ref}>
      <motion.div
        className="contentProjects"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="sliderProjects">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img
                src={slide.image}
                alt="Projeto"
                className={`imageProject ${
                  index === currentIndex ? "focused" : ""
                }`}
              />
              {index === currentIndex && (
                <p className="slideDescription">{slide.description}</p>
              )}
            </div>
          ))}
        </div>
        <button className="prevButton" onClick={prevSlide}>
          ←
        </button>
        <button className="nextButton" onClick={nextSlide}>
          →
        </button>
      </motion.div>
    </section>
  );
}

export default Projects;
