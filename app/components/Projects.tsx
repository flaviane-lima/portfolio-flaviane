
import { Project } from "./types";
import Card from "./Card";
import styled from "styled-components";


const StyledSection = styled.section`
  background-color: #F9FAFB;
  color: #333333;
  margin: 1rem auto 0 auto;
  border-radius: 10px;
  max-width: 1000px;
  padding: 1.5rem 1rem;


   /* TABLET / DESKTOP */
  @media (min-width: 767px) {
    padding: 2rem;

  }


  
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #333;
  
`

const ProjectsGrid = styled.div` 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* em telas menores, só uma coluna */
  }


  `;

// vou criar um array
const projects: Project[] = [
    { 
        id: 0,
        title: "Burger Queen API",
        image: "/images/burgerqueenapi.jpeg",
        description: "API desenvolvida para autenticação e gerenciamento de usuários, utilizando Node.js, Express e MongoDB.",
        technologies: ["Node.js", "Express.js", "MongoDB", "Vercel"],
        status: "Concluído",
        github: "https://github.com/flaviane-lima/myfinance"
    },

    {
        id: 1,
        title: "My Finance",
        image: "/images/myFinance.jpeg",
        description: "Aplicativo  financeiro, permitindo o registro e gerenciamento de despesas usando Next.js, Typescript",
        technologies: ["Tailwind", "TypeScript", "Next.js", "Prisma ORM", "Docker"],
        status: "Em andamento",
        github: "https://github.com/flaviane-lima/myfinance"
    },

    { 
        id: 2,
        title: "Fleet Management API",
        image: "/images/fleet.jpg",
        description: "API desenvolvida para gestão de frota de táxi, permitindo autenticação e gerenciamento de motorista e veículos atravéns de identificadoresnpm run dev.",
        technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
        status: "concluído",
        github: "https://github.com/flaviane-lima/SAP012-fleet-management-api"
    },

    { 
        id: 3,
        title: "Dataverse Chat",
        image: "/images/dataverse.jpg",
        description: "Aplicação web que permite visualizar e explorar dados de personagem de animes, com filtros e estatística.",
        technologies: ["JavaScript", "HTML", "CSS", "Open AI"],
        status: "concluído",
        github: "https://github.com/flaviane-lima/SAP012-dataverse-chat"
    },

    { 
        id: 4,
        title: "Analisador de texto",
        image: "/images/analisador.jpg",
        description: "Aplicação web desenvolvida para análise de texto, permitindo ao usuário obter estatística gerais como número de palavras, caracteres e frequência.",
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "concluído",
        github: "https://github.com/flaviane-lima/SAP012-dataverse-chat"
    },

    { 
        id: 5,
        title: "Dataverse-Otakus list",
        image: "/images/dataverseanime.jpg",
        description: "Aplicação web desenvolvida em parceria, voltada para trazer informações sobre personagens de animes, permitindo ao usuário filtrar e ordenar os dados.",
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "concluído",
        github: "https://github.com/flaviane-lima/SAP012-dataverse"
    },


];

export default function () {
    return (
        <StyledSection>
            <SectionTitle>Projetos</SectionTitle>
            <ProjectsGrid>
            {projects.map((project) => (
                <Card 
                 key={project.id}
                 title={project.title}
                 image={project.image}
                 description={project.description}
                 technologies={project.technologies}
                 status={project.status}
                 github={project.github}
                />
            ))}
            </ProjectsGrid>
        </StyledSection>
    )
}