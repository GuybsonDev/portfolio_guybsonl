import "./styles.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: '1',
      image: require('../../assets/images/projeto-api-pib.jpg'),
      name: 'Desenvolvimento de API PIB Países Africanos',
      link: 'https://github.com/GuybsonDev/API-Analise-PIB-Africano',
      desc: 'Desenvolvi uma API funcional com parâmetros e filtros avançados para aprimorar meu conhecimento em desenvolvimento de APIs. A fonte da API é uma base de dados sobre o crescimento do PIB dos países africanos, cobrindo o período de 1960 a 2023 (63 anos), extraída do Kaggle. Para manipulação da planilha, utilizei a biblioteca Pandas, que possibilitou uma análise eficiente dos dados, e para a construção da API, optei pelo Flask, garantindo uma implementação simples e rápida. A API foi desenvolvida no ambiente de programação Replit, permitindo que ela seja acessada e consumida de qualquer lugar. Essa API oferece duas formas de consumo: é possível acessar todos os dados completos ou fazer consultas filtradas por período anual, utilizando parâmetros para restringir os resultados conforme a necessidade. Para testar o funcionamento da API, utilizei a biblioteca requests em um código separado, permitindo realizar requisições HTTP e garantir que a API está operando corretamente, além de validar o consumo de dados de forma eficiente',
      tecnologycs: [require('../../assets/images/flask-logo.png'),
      require('../../assets/images/requests-logo.png'),
      require('../../assets/images/pandas-logo.png'),
      require('../../assets/images/python-logo.png'),]
    },
    {
      id: '2',
      image: require('../../assets/images/projeto-analise-energia.jpg'),
      name: 'Dashboard de Consumo de Energia UFU',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYjBhYzRjNzEtODk4MS00OTk0LTgzMGMtZTBiNjY3YTU1M2RlIiwidCI6ImJlN2JmNTQwLTMyMTQtNGE1Ny1hY2U2LWVkZWY3YTE3YjNhZCJ9&embedImagePlaceholder=true',
      desc: 'Este projeto apresenta a criação de um dashboard 100% interativo sobre o consumo de energia elétrica da Universidade Federal de Uberlândia (UFU) no ano de 2022. Os dados utilizados foram reaproveitados de uma análise anterior, originalmente desenvolvida em Python, para explorar as possibilidades oferecidas pelo Power BI. O objetivo foi aprimorar habilidades na ferramenta, reconhecida por sua capacidade de visualização e apresentação de dados de forma dinâmica e intuitiva. Este trabalho evidencia a transição e adaptação entre diferentes tecnologias de análise e visualização, destacando o potencial do Power BI para transformar dados em insights visuais eficientes.',
      tecnologycs: [require('../../assets/images/pbi-logo.png'),
      require('../../assets/images/python-logo.png'),
      require('../../assets/images/htm-logo.png'),
      require('../../assets/images/pandas-logo.png'),
      require('../../assets/images/streamlit-logo.png'),
      ]
    },
    {
      id: '3',
      image: require('../../assets/images/projeto-ep.jpeg'),
      name: 'Sistema de Controle de Estoque e Gestão Financeira EP',
      link: 'https://github.com/GuybsonDev/EP',
      desc: 'Este projeto é voltado para a organização e otimização do meu empreendimento, com foco no controle eficiente de estoque e na gestão financeira. A solução utiliza um banco de dados SQLite local para armazenar informações importantes, como movimentações de estoque e transações financeiras. Essa abordagem inicial garante simplicidade e funcionalidade, permitindo futuras expansões, como a migração para um banco de dados mais robusto ou a criação de um dashboard interativo para visualização e análise dos dados. É um passo importante para aprimorar a gestão do negócio, proporcionando mais controle e tomada de decisão baseada em dados.',
      tecnologycs: [require('../../assets/images/sql-logo.png'),
      require('../../assets/images/python-logo.png'),
      require('../../assets/images/streamlit-logo.png'),
      require('../../assets/images/pandas-logo.png'),
      ]
    },
    {
      id: '4',
      image: require('../../assets/images/projeto-ia-henet.png'),
      name: 'Treinamento IA Base Henet',
      link: 'https://github.com/GuybsonDev/Treinamento-IA-Base-Henet',
      desc: 'Realizei a extração de dados (web scraping) da URL principal e de todas as dependências do site henet.com.br, capturando todo o conteúdo em HTML das páginas. Após a limpeza e normalização dos textos, os dados foram segmentados em fragmentos menores e transformados em tokens. Utilizei a API do ChatGPT para gerar os embeddings correspondentes, que foram armazenados em uma base de dados vetorial para consultas futuras. Com essa estrutura, implementei um sistema de consulta semântica que utiliza os embeddings para buscar informações relevantes no dataframe e gera respostas elaboradas pela IA com base nos dados coletados.',
      tecnologycs: [require('../../assets/images/htm-logo.png'),
      require('../../assets/images/python-logo.png'),
      require('../../assets/images/pandas-logo.png'),
      require('../../assets/images/chatgpt-logo.png'),
      require('../../assets/images/requests-logo.png'),
      require('../../assets/images/selenium-logo.png'),
      ]
    },
    {
      id: '5',
      image: require('../../assets/images/projeto-mercado-livre.jpg'),
      name: 'Sistema de Análise do Mercado Livre',
      link: 'https://github.com/GuybsonDev/Dashboard-Mercado-Livre',
      desc: 'Projeto desenvolvido para visualizar o funcionamento de uma API do Mercado Livre, com o objetivo de fornecer dados relevantes para vendedores atuais e potenciais da plataforma. Através dessa ferramenta, é possível identificar informações sobre vendedores, produtos, quantidades, descontos aplicados, entre outros aspectos importantes. ',
      tecnologycs: [require('../../assets/images/python-logo.png'),
      require('../../assets/images/streamlit-logo.png'),
      require('../../assets/images/pandas-logo.png'),
      ]
    },
    {
      id: '6',
      image: require('../../assets/images/projeto-chaves.jpg'),
      name: 'App Gerador e Armazenador de Senhas',
      link: 'https://github.com/GuybsonDev/App-Gerador-de-Senhas',
      desc: 'Desenvolvimento de Aplicativo com Expo e React Native com foco em aprendizado. Durante o desenvolvimento, foquei na organização dos arquivos e na estruturação do código. O aplicativo funciona como um gerador de senhas, apresentando uma tela inicial com um slider que permite ao usuário selecionar o número de caracteres desejado para a senha. Após escolher a quantidade de caracteres, ao pressionar o botão "Gerar Senha", o aplicativo cria uma senha aleatória composta por letras, números e símbolos conforme a seleção do usuário. A senha gerada pode ser copiada ou salva. Na tela de Senhas, o usuário tem a opção de armazenar e gerenciar suas senhas, podendo excluí-las facilmente ao pressionar e segurar sobre a senha desejada. O aplicativo salva as senhas localmente fazendo com que não seja perdido as senhas ao fechar.',
      tecnologycs: [require('../../assets/images/react-logo.png'),
      require('../../assets/images/js-logo.png'),
      require('../../assets/images/htm-logo.png'),
      require('../../assets/images/css-logo.png'),
      require('../../assets/images/expo-logo.png'),
      ]
    },
    {
      id: '7',
      image: require('../../assets/images/projeto-portfolio.png'),
      name: 'Portfolio Guybson Lopes',
      link: 'https://github.com/GuybsonDev/portfolio_guybsonl',
      desc: 'Irei adicionar',
      tecnologycs: [require('../../assets/images/react-logo.png'),
      require('../../assets/images/js-logo.png'),
      require('../../assets/images/htm-logo.png'),
      require('../../assets/images/css-logo.png'),
      ]
    }
  ]

  return (
    <section id="projetos" className="containerProjects" ref={ref}>
      <motion.div
        className="contentProjects"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="containerSlide"
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={false}
            modules={[Pagination]}
            className="slide"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt={item.name} className="slideItem" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          className="containerDescProject"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="titleDescProject">{data[activeIndex].name}</h1>
          <p className="textDescProject">{data[activeIndex].desc}</p>
          <hr className="divider" />
          <h3 className="titleImageTecnologycs">Tecnologias utilizadas: </h3>
          <div className="containerImagesTecnologycs">
            {data[activeIndex].tecnologycs.map((tech, index) => (
              <img key={index} src={tech} className="imageTecnologycs" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
