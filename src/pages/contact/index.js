import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10px" });

  return (
    <section id="contato" className="containerContact" ref={ref}>
      <motion.div
        className="contentContact"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="containerPhone">
          <div className="containerTextPhone">
            <img src={require("../../assets/images/telefone-logo.png")} className="logoPhone"/>
            <h3 className="textPhoneText">Telefone:</h3>
          </div>
          <h3 className="textPhone">55 77981187169</h3>
        </div>
        <div className="containerEmail">
          <div className="containerTextEmail">
            <img src={require("../../assets/images/email-logo.png")} className="logoEmail"/>
            <h3 className="textEmailText">E-mail:</h3>
          </div>
          <h3 className="textEmail">guybsonlopescomercial@gmail.com</h3>
        </div>
        <h3 className="textCopright">© 2024 Guybson Lopes. Todos os direitos reservados.</h3>
        
      </motion.div>
    </section>
  );
}

export default Contact;
