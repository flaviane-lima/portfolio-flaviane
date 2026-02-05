

import Image from "next/image";
import { CardProps } from "./types";
import styled from "styled-components";


const ProjectCard = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;


const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  margin-bottom: 16px;
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

const GithubButtom = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 10px 16px;
  background-color: #1E3A8A;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  
  &:hover {
  background-color: #1E40AF;
}
  

`

//recebe os dados via props
export default function Card({ title, image, description, technologies, status, github }: CardProps) {
  return (
    <ProjectCard>
      <ImageWrapper>
        <ProjectTitle>{title}</ProjectTitle>
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
        <p>Tecnologias: {technologies.join(" | ")}</p>
        <p>Status: {status}</p>
        <GithubButtom href={github} target="_blank" className="button"> Ver no GitHub</GithubButtom>
      </div>
    </ProjectCard>
  );
}
