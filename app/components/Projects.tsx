
import { Project } from "./types";
import Card from "./Card";

// vou criar um array
const projects: Project[] = [
    {
        title: "My Finance",
        image: "/images/myFinance.jpeg",
        description: "Gestão financeira pessoal simples e organizada.",
        technologies: ["Tailwind", "TypeScript", "Next.js", "Prisma ORM", "Docker"],
        status: "Em andamento",
        github: "https://github.com/flaviane-lima/myfinance"
    }
];

export default function () {
    return (
        <div>
            {projects.map((project) => (
                <Card 
                 key={project.title}
                 title={project.title}
                 image={project.image}
                 description={project.description}
                 technologies={project.technologies}
                 status={project.status}
                 github={project.github}
                />
            ))}
        </div>
    )
}