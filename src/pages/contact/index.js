import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35px" });

  return (
    <section id="contato" className="containerContact" ref={ref}>
      <motion.div
        className="contentContact"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3>Telefone</h3>
          <h3>55 77981187169</h3>
        </div>
        
      </motion.div>
    </section>
  );
}

export default Contact;
