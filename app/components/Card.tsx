

import Image from "next/image";
import { CardProps } from "./types";
import styled from "styled-components";

const StyledImage = styled(Image)`
    object-fit: cover;
    border-radius: 8px;  
`

//recebe os dados via props
export default function Card({ title, image, description, technologies, status, github }: CardProps) {
  return (
    <section>
      <h2>Projetos</h2>
    <div>
      <h3>{title}</h3>
      <StyledImage
        src={image}
        alt={title}
        quality={100}
        width={400}
        height={250}
      />
      <div>
        <p>{description}</p>
        <p>Tecnologias: {technologies}</p>
        <p>Status: {status}</p>
        <a href={github} target="_blank" className="button">GitHub:</a>
      </div>
    </div>
    </section>
  );
}
