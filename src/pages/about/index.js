import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  return (
    <section id="sobre" className="containerAbout" ref={ref}>
      <motion.div
        className="contentAbout"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contentMe">
          <motion.div
            className="contentTextTitle"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="textTitle">Quem eu sou?</h1>
            <p className="textParagraph">
              Sou um analista de dados com experiências em automação,
              desenvolvimento de sistemas, web scraping, machine learning, banco
              de dados, nuvem (AWS) e insights valiosos. Além de possuir
              conhecimentos em várias ferramentas como: MySQL, Python, Pandas,
              APIs RESTful, Looker Studio, Power BI, Git/GitHub, ETL, React e
              React Native, além de um vasto conhecimento em dados. Sou uma
              pessoa que busca não apenas se manter atualizada com as
              tecnologias, mas também aprender novas ferramentas para
              implementar no ambiente de trabalho, sempre com o intuito de
              inovar.
            </p>
          </motion.div>

          <hr className="divider" />

          <motion.div
            className="contentTecnologics"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              "python-logo.png",
              "js-logo.png",
              "pbi-logo.png",
              "aws-logo.png",
              "css-logo.png",
              "flask-logo.png",
              "htm-logo.png",
              "requests-logo.png",
              "sql-logo.png",
              "streamlit-logo.png",
              "selenium-logo.png",
              "shell-logo.png",
              "django-logo.png",
              "react-logo.png",
              "excel-logo.png",
              "chatgpt-logo.png",
              "pandas-logo.svg",
              "expo-logo.png"
            ].map((image, index) => (
              <motion.img
                key={index}
                src={require(`../../assets/images/${image}`)}
                className="imageTecnologic"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>

        <motion.img
          src={require("../../assets/images/image-me.JPEG")}
          className="imageMe"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.div>
    </section>
  );
}

export default About;
