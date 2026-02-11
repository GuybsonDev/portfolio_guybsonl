import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Pagination,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

import profileImage from "./assets/images/foto-minha-essa.jpeg";
import projectApiPib from "./assets/images/projeto-api-pib.jpg";
import projectEnergia from "./assets/images/projeto-analise-energia.jpg";
import projectEP from "./assets/images/projeto-ep.jpeg";
import projectIA from "./assets/images/projeto-ia-henet.png";
import projectMercadoLivre from "./assets/images/projeto-mercado-livre.jpg";
import projectChaves from "./assets/images/projeto-chaves.jpg";
import projectPortfolio from "./assets/images/projeto_portfolio_novo.png";
import projectEdaSemantix from "./assets/images/eda_projeto.jpeg";
import projectQuadrixDesktop from "./assets/images/quadrix-desktop.png";

const navItems = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Experiência", id: "experiencia" },
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projetos" },
  { label: "Contato", id: "contato" },
];

const heroSignals = [
  { label: "APIs e Integrações", value: "REST + Sistemas" },
  { label: "Dados e BI", value: "Pandas + Dashboards" },
  { label: "Web e Mobile", value: "React + React Native" },
  { label: "Cloud e Deploy", value: "AWS + Linux" },
];

const skillsByArea = [
  {
    title: "Desenvolvimento Full Stack",
    icon: CodeRoundedIcon,
    summary:
      "Construção de aplicações web e mobile com foco em UX, arquitetura limpa e entrega contínua.",
    items: ["React", "React Native", "Django", "Flask", "JavaScript", "Python"],
  },
  {
    title: "Dados e BI",
    icon: DataObjectRoundedIcon,
    summary:
      "Análise de dados ponta a ponta para gerar insights e apoiar decisões de negócio.",
    items: ["Pandas", "Power BI", "Looker Studio", "Excel", "Matplotlib", "ETL"],
  },
  {
    title: "Integrações e Automação",
    icon: HubRoundedIcon,
    summary:
      "Integração de sistemas, APIs e automações para reduzir operação manual e ganho de escala.",
    items: ["REST APIs", "Web Scraping", "Chatbots", "Selenium", "SQL", "MariaDB"],
  },
  {
    title: "Cloud e Metodologias",
    icon: CloudRoundedIcon,
    summary:
      "Publicação em ambiente Linux, uso de nuvem e trabalho colaborativo com métodos ágeis.",
    items: ["AWS", "Google Cloud", "Linux", "Git", "GitHub", "Kanban/Scrum"],
  },
];

const experiences = [
  {
    company: "Henet Manutenção e Serviços Digitais",
    role: "Analista de Desenvolvimento de Sistemas",
    period: "08/2023 - Atual",
    location: "Caculé - BA",
    technologies: ["Python", "React", "SQL", "Power BI", "AWS", "Google Cloud", "Git/GitHub"],
  },
];

const projects = [
  {
    title: "API de PIB dos Países Africanos",
    description:
      "API com filtros por período para explorar 63 anos de dados econômicos, aplicando Flask, Pandas e boas práticas de consumo REST.",
    image: projectApiPib,
    link: "https://github.com/GuybsonDev/API-Analise-PIB-Africano",
    stack: ["Flask", "Python", "Pandas", "REST API"],
  },
  {
    title: "Dashboard Interativo de Consumo de Energia",
    description:
      "Projeto de análise em dados reais da UFU com KPIs e visualizações dinâmicas para leitura de comportamento de consumo.",
    image: projectEnergia,
    link: "https://app.powerbi.com/view?r=eyJrIjoiYjBhYzRjNzEtODk4MS00OTk0LTgzMGMtZTBiNjY3YTU1M2RlIiwidCI6ImJlN2JmNTQwLTMyMTQtNGE1Ny1hY2U2LWVkZWY3YTE3YjNhZCJ9&embedImagePlaceholder=true",
    stack: ["Power BI", "Python", "Pandas", "BI"],
  },
  {
    title: "Sistema de Estoque e Gestão Financeira",
    description:
      "Aplicação para controle de estoque e financeiro com estrutura preparada para evolução em analytics e banco robusto.",
    image: projectEP,
    link: "https://github.com/GuybsonDev/EP",
    stack: ["Python", "SQLite", "Streamlit", "Pandas"],
  },
  {
    title: "Base de Conhecimento com IA",
    description:
      "Pipeline de scraping e embeddings para consulta semântica em base textual, com respostas contextualizadas por IA.",
    image: projectIA,
    link: "https://github.com/GuybsonDev/Treinamento-IA-Base-Henet",
    stack: ["Python", "Selenium", "Embeddings", "ChatGPT API"],
  },
  {
    title: "Análise de Mercado Livre",
    description:
      "Visualização de indicadores comerciais para vendedores, com leitura de produto, volume e oportunidades de precificação.",
    image: projectMercadoLivre,
    link: "https://github.com/GuybsonDev/Dashboard-Mercado-Livre",
    stack: ["Python", "APIs", "Pandas", "Streamlit"],
  },
  {
    title: "App Gerador e Cofre de Senhas",
    description:
      "Aplicativo mobile para gerar, salvar e gerenciar senhas localmente, com foco em usabilidade e persistência.",
    image: projectChaves,
    link: "https://github.com/GuybsonDev/App-Gerador-de-Senhas",
    stack: ["React Native", "Expo", "JavaScript", "UX"],
  },
  {
    title: "Portfólio Profissional",
    description:
      "Portal para recrutadores com foco em narrativa técnica, stack, experiência, projetos e contato direto.",
    image: projectPortfolio,
    link: "https://github.com/GuybsonDev/portfolio_guybsonl",
    stack: ["React", "MUI", "Framer Motion", "UI"],
  },
  {
    title: "Projeto Parceria Semantix - EDA de Marketing Digital",
    description:
      "Atividade da EBAC no curso de Analista de Dados em parceria com a Semantix: EDA de marketing digital com dashboard no Looker Studio, foco em KPIs, eficiência por canal e insights acionáveis, incluindo uso de banco MySQL local.",
    image: projectEdaSemantix,
    link: "https://github.com/GuybsonDev",
    stack: ["Python", "Pandas", "ETL", "MySQL", "Looker Studio"],
  },
  {
    title: "Quadrix B2B/SaaS - Sistema de agendamento de quadras",
    description:
      "Desenvolvi o Quadrix, uma plataforma B2B/SaaS para agendamento e gestão de quadras esportivas. O sistema permite reservas por modalidade e horário, confirmação de presença em tempo real, painéis para administrador e participante, além de métricas e relatórios para apoiar a operação. A interface foi construída com foco em UX e responsividade total (mobile, tablet e desktop).",
    image: projectQuadrixDesktop,
    link: "https://github.com/GuybsonDev",
    stack: ["Django", "Django Ninja", "React", "MUI", "TanStack Query", "SaaS"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay,
    },
  }),
};

const PROJECTS_PER_PAGE = 6;

const interactiveCardSx = {
  transition: "transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: alpha("#7b8cab", 0.4),
    boxShadow: "0 18px 40px rgba(3, 14, 40, 0.45)",
  },
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("Todos");
  const [projectPage, setProjectPage] = useState(1);
  const { scrollYProgress } = useScroll();
  const progressValue = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.22,
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#6c7ea0",
          },
          secondary: {
            main: "#7b8cab",
          },
          background: {
            default: "#0b101b",
            paper: "#161b2b",
          },
          text: {
            primary: "#e0e7f0",
            secondary: "#aab2c1",
          },
        },
        shape: {
          borderRadius: 18,
        },
        typography: {
          fontFamily: '"IBM Plex Sans", sans-serif',
          h1: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            letterSpacing: -1,
          },
          h2: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            letterSpacing: -0.4,
          },
          h3: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 600,
          },
          button: {
            textTransform: "none",
            fontWeight: 600,
          },
        },
      }),
    []
  );

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  const projectTags = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.flatMap((project) => project.stack)))],
    []
  );

  const visibleProjects = useMemo(
    () => {
      const orderedProjects = [...projects].reverse();
      return projectFilter === "Todos"
        ? orderedProjects
        : orderedProjects.filter((project) => project.stack.includes(projectFilter));
    },
    [projectFilter]
  );

  const paginatedProjects = useMemo(() => {
    const startIndex = (projectPage - 1) * PROJECTS_PER_PAGE;
    return visibleProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [visibleProjects, projectPage]);

  const totalProjectPages = Math.ceil(visibleProjects.length / PROJECTS_PER_PAGE);

  useEffect(() => {
    setProjectPage(1);
  }, [projectFilter]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component={motion.div}
        style={{ scaleX: progressValue }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          transformOrigin: "0%",
          zIndex: 1500,
          background: "linear-gradient(90deg, #6f7f9d, #9ca5b7)",
        }}
      />

      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflowX: "clip",
          background:
            "linear-gradient(160deg, #060810 0%, #0b101b 36%, #121826 68%, #1b2230 100%)",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: -170,
            left: -130,
            width: 390,
            height: 390,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(138,150,173,0.18), rgba(138,150,173,0))",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "fixed",
            bottom: -180,
            right: -160,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110,122,145,0.16), rgba(110,122,145,0))",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: alpha("#0b101b", 0.88),
            borderBottom: `1px solid ${alpha("#7b8cab", 0.22)}`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 7 } }}>
            <Toolbar disableGutters sx={{ minHeight: 74 }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, letterSpacing: -0.2 }}
              >
                Guybson Lopes
              </Typography>

              <Stack direction="row" spacing={0.5} sx={{ ml: 3.5, display: { xs: "none", md: "flex" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: "text.primary",
                      borderRadius: 2,
                      px: 1.5,
                      "&:hover": {
                        bgcolor: alpha("#7b8cab", 0.14),
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Stack direction="row" spacing={0.8} sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  component="a"
                  href="https://github.com/GuybsonDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/guybson-lopes-132b7020b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <Button
                  component="a"
                  href="https://drive.google.com/file/d/1JJxGjnX4bWpCcOekF53cWftmX2dXH1O1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<DescriptionOutlinedIcon />}
                  sx={{ bgcolor: "#6c7ea0", "&:hover": { bgcolor: "#5e7193" } }}
                >
                  Currículo
                </Button>
              </Stack>

              <IconButton
                aria-label="Abrir menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: 1, display: { xs: "inline-flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              background: "linear-gradient(180deg, #161b2b 0%, #12182a 100%)",
              borderLeft: `1px solid ${alpha("#7b8cab", 0.25)}`,
            },
          }}
        >
          <Box sx={{ width: 282, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.8, fontFamily: '"Sora", sans-serif' }}>
              Navegação
            </Typography>
            <List sx={{ p: 0 }}>
              {navItems.map((item) => (
                <ListItemButton key={item.id} onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
            <Divider sx={{ my: 2, borderColor: alpha("#7b8cab", 0.2) }} />
            <Stack direction="row" spacing={1}>
              <IconButton component="a" href="https://github.com/GuybsonDev" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/guybson-lopes-132b7020b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <Button
                component="a"
                href="https://drive.google.com/file/d/1JJxGjnX4bWpCcOekF53cWftmX2dXH1O1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="contained"
                sx={{ bgcolor: "#6c7ea0", "&:hover": { bgcolor: "#5e7193" } }}
              >
                Currículo
              </Button>
            </Stack>
          </Box>
        </Drawer>

        <Box component="main" sx={{ position: "relative", zIndex: 1, pb: 10 }}>
          <Container maxWidth={false} sx={{ pt: { xs: 12, md: 14 }, px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 7 } }}>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <Box
                id="inicio"
                sx={{
                  scrollMarginTop: 92,
                  border: `1px solid ${alpha("#7b8cab", 0.16)}`,
                  borderRadius: 5,
                  p: { xs: 2.7, md: 4.2 },
                  bgcolor: alpha("#161b2b", 0.78),
                  transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha("#161b2b", 0.86),
                    borderColor: alpha("#7b8cab", 0.34),
                    boxShadow: "0 18px 40px rgba(3, 14, 40, 0.34)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.2fr) minmax(0, 0.8fr)" },
                    gap: 3,
                    alignItems: { xs: "stretch", lg: "center" },
                  }}
                >
                  <Box>
                    <Chip
                      label="Desenvolvedor Full Stack com foco em Dados"
                      sx={{
                        mb: 2,
                        color: "#d5dbe8",
                        border: `1px solid ${alpha("#d5dbe8", 0.42)}`,
                        bgcolor: alpha("#d5dbe8", 0.1),
                      }}
                    />
                    <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3.1rem" } }}>
                      Guybson Lopes
                    </Typography>
                    <Typography sx={{ mt: 1, color: "#b4bccb", fontSize: { xs: "1.08rem", md: "1.35rem" } }}>
                      Construo soluções end-to-end: frontend, backend, integrações e análise de dados orientada a
                      resultado.
                    </Typography>

                    <Typography sx={{ mt: 2.2, lineHeight: 1.82, color: "#c9d0de", maxWidth: 720 }}>
                      Experiência profissional com automação de processos, desenvolvimento de APIs, web scraping,
                      dashboards e pipelines de dados. Atuação com React, React Native, Python, SQL, Power BI, Looker
                      Studio, Django, Git e cloud (AWS/Google Cloud).
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.3} sx={{ mt: 3.2 }}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => scrollToSection("projetos")}
                        endIcon={<ArrowOutwardIcon />}
                        sx={{ bgcolor: "#6c7ea0", "&:hover": { bgcolor: "#5e7193" } }}
                      >
                        Ver projetos
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => scrollToSection("contato")}
                        sx={{
                          borderColor: alpha("#c9d0de", 0.68),
                          color: "#e0e7f0",
                          "&:hover": {
                            borderColor: "#e0e7f0",
                            bgcolor: alpha("#e0e7f0", 0.08),
                          },
                        }}
                      >
                        Falar comigo
                      </Button>
                    </Stack>

                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
                      {[
                        "React + Django",
                        "APIs RESTful",
                        "Power BI / Looker Studio",
                        "Python + SQL",
                        "ETL + Automação",
                        "AWS / Google Cloud",
                      ].map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: alpha("#c4cddd", 0.14) }} />
                      ))}
                    </Stack>
                  </Box>

                  <Stack spacing={1.5} sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "minmax(0, 420px)",
                          sm: "repeat(2, minmax(180px, 240px))",
                        },
                        justifyContent: "center",
                        gap: 1.3,
                      }}
                    >
                      {heroSignals.map((item) => (
                        <Paper
                          key={item.label}
                          component={motion.div}
                          whileHover={{ y: -4 }}
                          sx={{
                            width: "100%",
                            p: 1.5,
                            borderRadius: 3,
                            border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                            bgcolor: alpha("#161b2b", 0.78),
                            ...interactiveCardSx,
                          }}
                        >
                          <Typography sx={{ fontSize: "0.82rem", color: "text.secondary" }}>{item.label}</Typography>
                          <Typography sx={{ mt: 0.6, fontWeight: 600 }}>{item.value}</Typography>
                        </Paper>
                      ))}
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.08}
            >
              <Box id="sobre" sx={{ scrollMarginTop: 92, mt: { xs: 7, md: 9 } }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2.2}>
                  <Card
                    sx={{
                      flex: 0.9,
                      borderRadius: 5,
                      border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                      bgcolor: alpha("#161b2b", 0.78),
                      ...interactiveCardSx,
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={1.6} alignItems="center">
                        <Avatar
                          src={profileImage}
                          alt="Foto de Guybson Lopes"
                          sx={{ width: 150, height: 150, border: `4px solid ${alpha("#7b8cab", 0.45)}` }}
                        />
                        <Typography variant="h6">Perfil profissional</Typography>
                        <Typography sx={{ textAlign: "center", color: "text.secondary", lineHeight: 1.74 }}>
                          Profissional organizado e orientado a resultado, com atuação em desenvolvimento de sistemas,
                          automação, dados e melhoria contínua de processos.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      flex: 1.6,
                      borderRadius: 5,
                      border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                      bgcolor: alpha("#161b2b", 0.78),
                      ...interactiveCardSx,
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.6, md: 3.2 } }}>
                      <Typography variant="h2" sx={{ fontSize: { xs: "1.52rem", md: "2rem" } }}>
                        Full Stack + Dados para negócio
                      </Typography>
                      <Typography sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.9 }}>
                        Meu foco é criar produtos digitais completos que resolvem problemas reais. Trabalho com
                        desenvolvimento de sistemas e análise de dados para transformar informação em ação, com
                        entregas técnicas consistentes e comunicação clara com as áreas de negócio.
                      </Typography>

                      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.2 }}>
                        {[
                          "Desenvolvimento Web",
                          "Dashboards Interativos",
                          "Integração de Sistemas",
                          "Automação de Processos",
                          "Web Scraping",
                          "Análise de Dados",
                          "Chatbots",
                          "Metodologias Ágeis",
                        ].map((chip) => (
                          <Chip key={chip} label={chip} size="small" sx={{ bgcolor: alpha("#c4cddd", 0.09) }} />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Box>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              custom={0.12}
            >
              <Box id="experiencia" sx={{ scrollMarginTop: 92, mt: { xs: 7, md: 9 } }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <WorkOutlineRoundedIcon color="primary" />
                  <Typography variant="h2" sx={{ fontSize: { xs: "1.52rem", md: "2rem" } }}>
                    Experiência profissional
                  </Typography>
                </Stack>
                <Typography sx={{ color: "text.secondary", maxWidth: 820 }}>
                  Clique para expandir e visualizar as experiências.
                </Typography>

                <Stack spacing={2} sx={{ mt: 2.3 }}>
                  {experiences.map((exp) => (
                    <Accordion
                      key={`${exp.company}-${exp.period}`}
                      sx={{
                        borderRadius: 4,
                        border: `1px solid ${alpha("#7b8cab", 0.16)}`,
                        bgcolor: alpha("#161b2b", 0.78),
                        overflow: "hidden",
                        "&:before": { display: "none" },
                        ...interactiveCardSx,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#9aa7bb" }} />}
                        sx={{ px: { xs: 2.2, md: 2.6 }, py: 0.2 }}
                      >
                        <Stack
                          direction={{ xs: "column", md: "row" }}
                          justifyContent="space-between"
                          spacing={0.8}
                          sx={{ width: "100%", pr: 1 }}
                        >
                          <Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.12rem" } }}>
                              {exp.role}
                            </Typography>
                            <Typography sx={{ color: "#9aa7bb", fontWeight: 600 }}>{exp.company}</Typography>
                          </Box>
                          <Chip
                            label={exp.period}
                            sx={{ alignSelf: "flex-start", bgcolor: alpha("#c4cddd", 0.13), color: "#d6dcea" }}
                          />
                        </Stack>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, px: { xs: 2.2, md: 2.6 }, pb: 2.2 }}>
                        <Typography sx={{ color: "#d0d8e7", lineHeight: 1.7 }}>
                          Local: {exp.location}
                        </Typography>
                        <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 1.2 }}>
                          {exp.technologies.map((item) => (
                            <Chip key={item} label={item} size="small" sx={{ bgcolor: alpha("#c4cddd", 0.1) }} />
                          ))}
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </Box>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              custom={0.16}
            >
              <Box id="stack" sx={{ scrollMarginTop: 92, mt: { xs: 7, md: 9 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.52rem", md: "2rem" }, mb: 1 }}>
                  Competências e tecnologias
                </Typography>
                <Typography sx={{ color: "text.secondary", maxWidth: 840 }}>
                  Tecnologias e práticas mapeadas no currículo, organizadas pelas áreas em que entrego valor.
                </Typography>

                <Box
                  sx={{
                    mt: 2.5,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                    gap: 2,
                  }}
                >
                  {skillsByArea.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.title}
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0.05 * idx}
                      >
                        <Card
                          sx={{
                            height: "100%",
                            borderRadius: 4,
                            border: `1px solid ${alpha("#7b8cab", 0.16)}`,
                            bgcolor: alpha("#161b2b", 0.78),
                            ...interactiveCardSx,
                          }}
                        >
                          <CardContent sx={{ p: 2.6 }}>
                            <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1 }}>
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  display: "grid",
                                  placeItems: "center",
                                  borderRadius: 2,
                                  bgcolor: alpha("#7b8cab", 0.16),
                                  color: "#7b8cab",
                                }}
                              >
                                <Icon />
                              </Box>
                              <Typography variant="h6" sx={{ fontSize: "1.05rem" }}>
                                {skill.title}
                              </Typography>
                            </Stack>

                            <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mb: 1.6 }}>
                              {skill.summary}
                            </Typography>

                            <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap">
                              {skill.items.map((item) => (
                                <Chip key={item} label={item} size="small" sx={{ bgcolor: alpha("#c4cddd", 0.1) }} />
                              ))}
                            </Stack>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </Box>
              </Box>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.18}
            >
              <Box id="projetos" sx={{ scrollMarginTop: 92, mt: { xs: 7, md: 9 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.52rem", md: "2rem" }, mb: 1 }}>
                  Projetos em destaque
                </Typography>
                <Typography sx={{ color: "text.secondary", maxWidth: 840 }}>
                  Projetos que reforçam meu posicionamento como desenvolvedor Full Stack com foco em dados.
                </Typography>
                <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 1.8 }}>
                  {projectTags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      clickable
                      onClick={() => setProjectFilter(tag)}
                      variant={projectFilter === tag ? "filled" : "outlined"}
                      color={projectFilter === tag ? "primary" : "default"}
                      sx={{
                        bgcolor: projectFilter === tag ? alpha("#6c7ea0", 0.24) : alpha("#c4cddd", 0.08),
                        borderColor: alpha("#7b8cab", 0.26),
                      }}
                    />
                  ))}
                </Stack>

                <Box
                  sx={{
                    mt: 2.5,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "repeat(2, minmax(0, 1fr))",
                      lg: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 2,
                  }}
                >
                  {paginatedProjects.map((project, idx) => (
                    <motion.div
                      key={project.title}
                      variants={reveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.12 }}
                      custom={0.04 * idx}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: 4,
                          border: `1px solid ${alpha("#7b8cab", 0.16)}`,
                          bgcolor: alpha("#161b2b", 0.78),
                          overflow: "hidden",
                          transition: "transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            borderColor: alpha("#7b8cab", 0.42),
                            boxShadow: "0 18px 40px rgba(3, 14, 40, 0.45)",
                          },
                          "&:hover .project-media": {
                            transform: "scale(1.06)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={project.image}
                          alt={project.title}
                          className="project-media"
                          sx={{
                            height: { xs: 240, sm: 270, md: 290 },
                            transition: "transform 0.35s ease",
                          }}
                        />
                        <CardContent sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.1, flexGrow: 1 }}>
                          <Typography variant="h6" sx={{ fontSize: "1rem", minHeight: 44 }}>
                            {project.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.6,
                              flexGrow: 1,
                              display: "-webkit-box",
                              WebkitLineClamp: 4,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Stack direction="row" spacing={0.7} useFlexGap flexWrap="wrap">
                            {project.stack.map((item) => (
                              <Chip key={item} label={item} size="small" sx={{ bgcolor: alpha("#c4cddd", 0.1) }} />
                            ))}
                          </Stack>
                          <Button
                            component="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon />}
                            sx={{ alignSelf: "flex-start", px: 0, color: "#8693a7" }}
                          >
                            Ver projeto
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Box>
                {visibleProjects.length > 0 && totalProjectPages > 1 && (
                  <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                    <Pagination
                      count={totalProjectPages}
                      page={projectPage}
                      onChange={(_, page) => setProjectPage(page)}
                      color="primary"
                      shape="rounded"
                      size="medium"
                    />
                  </Stack>
                )}
                {visibleProjects.length === 0 && (
                  <Typography sx={{ mt: 2, color: "text.secondary" }}>
                    Nenhum projeto encontrado para esse filtro.
                  </Typography>
                )}
              </Box>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
            >
              <Box
                id="contato"
                sx={{
                  scrollMarginTop: 92,
                  mt: { xs: 7, md: 9 },
                  borderRadius: 5,
                  p: { xs: 2.6, md: 3.4 },
                  border: `1px solid ${alpha("#7b8cab", 0.2)}`,
                  bgcolor: alpha("#161b2b", 0.84),
                  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.28)",
                  ...interactiveCardSx,
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h3" sx={{ fontSize: { xs: "1.4rem", md: "1.9rem" } }}>
                      Aberto a oportunidades Full Stack e Dados
                    </Typography>
                    <Typography sx={{ mt: 1.4, color: "text.secondary", lineHeight: 1.8 }}>
                      Se você busca um profissional para construir produto, integrar sistemas e transformar dados em
                      decisão, vamos conversar.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.1} sx={{ mt: 2.4 }}>
                      <Button
                        component="a"
                        href="mailto:guybsonlopescomercial@gmail.com"
                        startIcon={<EmailOutlinedIcon />}
                        variant="contained"
                        sx={{ bgcolor: "#6c7ea0", "&:hover": { bgcolor: "#5e7193" } }}
                      >
                        Enviar e-mail
                      </Button>
                      <Button
                        component="a"
                        href="https://www.linkedin.com/in/guybson-lopes-132b7020b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LinkedInIcon />}
                        variant="outlined"
                        sx={{
                          borderColor: alpha("#c4cddd", 0.52),
                          color: "#e0e7f0",
                          "&:hover": {
                            borderColor: "#e0e7f0",
                            bgcolor: alpha("#e0e7f0", 0.08),
                          },
                        }}
                      >
                        LinkedIn
                      </Button>
                    </Stack>
                  </Box>

                  <Stack spacing={1}>
                    <Paper
                      sx={{
                        p: 1.4,
                        borderRadius: 3,
                        bgcolor: alpha("#0b101b", 0.62),
                        border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                        transition: "transform 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          transform: "translateX(4px)",
                          borderColor: alpha("#7b8cab", 0.36),
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.1} alignItems="center">
                        <PhoneOutlinedIcon color="primary" />
                        <Typography>+55 77 98118-7169</Typography>
                      </Stack>
                    </Paper>
                    <Paper
                      sx={{
                        p: 1.4,
                        borderRadius: 3,
                        bgcolor: alpha("#0b101b", 0.62),
                        border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                        transition: "transform 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          transform: "translateX(4px)",
                          borderColor: alpha("#7b8cab", 0.36),
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.1} alignItems="center">
                        <EmailOutlinedIcon color="primary" />
                        <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                          guybsonlopescomercial@gmail.com
                        </Typography>
                      </Stack>
                    </Paper>
                    <Paper
                      sx={{
                        p: 1.4,
                        borderRadius: 3,
                        bgcolor: alpha("#0b101b", 0.62),
                        border: `1px solid ${alpha("#7b8cab", 0.18)}`,
                        transition: "transform 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          transform: "translateX(4px)",
                          borderColor: alpha("#7b8cab", 0.36),
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.1} alignItems="center">
                        <PlaceOutlinedIcon color="primary" />
                        <Typography>São Geraldo - Caculé - BA, Brasil</Typography>
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Container>
        </Box>

        <IconButton
          aria-label="Voltar ao topo"
          onClick={() => scrollToSection("inicio")}
          sx={{
            position: "fixed",
            right: { xs: 14, md: 24 },
            bottom: { xs: 14, md: 24 },
            zIndex: 1300,
            width: 44,
            height: 44,
            border: `1px solid ${alpha("#7b8cab", 0.34)}`,
            bgcolor: alpha("#12182a", 0.92),
            color: "#9aa7bb",
            transition: "transform 0.25s ease, background-color 0.25s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              bgcolor: alpha("#1a2339", 0.98),
            },
          }}
        >
          <KeyboardDoubleArrowUpRoundedIcon />
        </IconButton>

        <Box component="footer" sx={{ py: 3, textAlign: "center", color: alpha("#c4cddd", 0.8) }}>
          <Typography variant="body2">© {new Date().getFullYear()} Guybson Lopes. Todos os direitos reservados.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
