

import Image from "next/image";
import { CardProps } from "./types";
import styled from "styled-components";


const ProjectCard = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #374151;
  }
`;


const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  margin-bottom: 20px;
  width: 100%;
  
`

const ProjectTitle = styled.h3`
  font-size:1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111827;
`

const StyledImage = styled(Image)`
    object-fit: cover;
    border-radius: 8px;  
`

const StatusBadge = styled.span`
  display: block;
  padding: 4px 10px;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 12px;
  background-color: #E0E7FF;
  color: #1E3A8A;
  margin-bottom: 16px;
  
`

const TechLabel = styled.p`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`

const GithubButton = styled.a`
  display: block;
  margin-top: 16px;
  padding: 12px 20px;
  background-color: #1E3A8A;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  
  &:hover {
  background-color: #1E40AF;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
  

`

//recebe os dados via props
export default function Card({ title, image, description, technologies, status, github }: CardProps) {
  return (
    <ProjectCard>
      <ImageWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <StatusBadge>Status: {status}</StatusBadge>
        <StyledImage
          src={image}
          alt={title}
          quality={100}
          width={400}
          height={250}
        />
      </ImageWrapper>
      <div>
        <p>{description}</p>
        <TechLabel>Tecnologias: {technologies.join(" | ")}</TechLabel>
        <GithubButton href={github} target="_blank" > Ver no GitHub</GithubButton>
      </div>
    </ProjectCard>
  );
}
