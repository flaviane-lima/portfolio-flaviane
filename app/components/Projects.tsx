
import { Project } from "./types";
import Card from "./Card";
import styled from "styled-components";


const StyledSection = styled.section`
  background-color: #F9FAFB;
  color: #333333;
  margin: 1rem auto 0 auto;
  padding: 2rem;
  max-width: 1000px;        /* limita largura da seção inteira */
  border-radius: 10px;

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
  gap: 24px; `;

// vou criar um array
const projects: Project[] = [
    { 
        id: 0,
        title: "My Finance",
        image: "/images/myFinance.jpeg",
        description: "Gestão financeira pessoal simples e organizada.",
        technologies: ["Tailwind", "TypeScript", "Next.js", "Prisma ORM", "Docker"],
        status: "Em andamento",
        github: "https://github.com/flaviane-lima/myfinance"
    },

    {
        id: 1,
        title: "My",
        image: "/images/myFinance.jpeg",
        description: "Gestão financeira pessoal simples e organizada.",
        technologies: ["Tailwind", "TypeScript", "Next.js", "Prisma ORM", "Docker"],
        status: "Em andamento",
        github: "https://github.com/flaviane-lima/myfinance"
    },

    { 
        id: 2,
        title: "My",
        image: "/images/myFinance.jpeg",
        description: "Gestão financeira pessoal simples e organizada.",
        technologies: ["Tailwind", "TypeScript", "Next.js", "Prisma ORM", "Docker"],
        status: "Em andamento",
        github: "https://github.com/flaviane-lima/myfinance"
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