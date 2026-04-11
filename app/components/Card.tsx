

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
  min-height: 500px;

  p {
    margin-bottom: 8px;
    line-height: 1.6;
    color: #374151;
  }
`;


const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 20px;
  width: 100%;
  gap: 8px;
  
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ProjectTitle = styled.h3`
  font-size:1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111827;
`

const StyledImage = styled(Image)`
    width: 100%;
    height:160px;
    object-fit: cover;
    object-position: top center;
    border-radius: 8px;  
    `

const StatusBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 8px;
  background-color: #F3F4F6;
  color: #374151;
  margin-bottom: 12px;
  
`

const TechLabel = styled.p`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`

const GithubButton = styled.a`
  display: block;
  margin-top: auto;
  padding: 12px 20px;
  background-color: #1E3A8A;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;

  
  &:hover {
  background-color: #1E40AF;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
  

`

//recebe os dados via props
export default function Card({ title, image, description, technologies, status, github }: CardProps) {
  return (
    <ProjectCard>
      <ImageWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <StatusBadge>
          Status: {status}
          </StatusBadge>
        <StyledImage
          src={image}
          alt={title}
          quality={100}
          width={400}
          height={250}
          loading="eager"
        />
      </ImageWrapper>
      <CardContent>
        <p>{description}</p>
        <TechLabel>Tecnologias: {technologies.join(" | ")}</TechLabel>
        <GithubButton href={github} target="_blank" > Ver no GitHub</GithubButton>
      </CardContent>
    </ProjectCard>
  );
}
