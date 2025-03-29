import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  return (
    <section id="inicio" className="containerHome" ref={ref}>
      <motion.div
        className="contentHome"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="contentProfile"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="textName">Guybson Lopes</h1>
          <h3 className="textJob">Analista de Dados</h3>
        </motion.div>

        <motion.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjY0cm50aW9vOHN3c3FqczFlZXh6MzU3bWFmZHllanI4N2o3dHJkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gh0RRgkTXedvF0pDc0/giphy.gif"
          className="gifImage"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>
    </section>
  );
}

export default Home;
