

import Image from "next/image";
import { CardProps } from "./types";

//recebe os dados via props
export default function Card({ title, image, description, technologies, status, github }: CardProps) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        fill
        quality={100}
        className="card_img"
        style={{ objectFit: "cover" }}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Tecnologias: {technologies}</p>
        <p>Status: {status}</p>
        <a href={github} target="_blank" className="button">GitHub</a>
      </div>
    </div>
  );
}
