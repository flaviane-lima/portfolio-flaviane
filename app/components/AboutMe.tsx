'use client'

import styled from "styled-components"

const StyledSection = styled.section`
 background-color: #F9FAFB;
 color: #333333;
 text-align: left;
 margin: 2rem auto;
 padding: 3rem;
 max-width: 1000px;        /* limita largura da seção inteira */
 border-radius: 10px;

 h2 {
   font-size:  1.75rem;
   font-weight: bold;
   margin: 0 0 1rem 0;
}

p {
   font-size: 1rem;
   margin: 1rem 0;
   color: #555;
   line-height: 1.8;
   }

   @media (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
      
    }
    p {
      font-size: 0.875rem;
    }
  }


`

export default function AboutMe() {
  return (
    <StyledSection>
      <h2>Sobre Mim</h2>
      <p>
        Desenvolvedor(a) Full Stack com experiência prática em desenvolvimentos de aplicações web full stack, utilizando Next.js, Node.js, TypeScript, PostgreSQL, API REST e operações CRUD . Concluí bootcamp intensivo em desenvolvimento web, criando aplicações completas com frontend responsivo e backend robusto.
      </p>

      <p>
        Sigo aprofundando meus conhecimentos por meio de projetos pessoais, onde venho aplicando conhecimento como CRUD, organização de código para reutilização e integração com banco de dados utilizando Prisma e Docker.
      </p>
      <p>
        Minha trajetória empreendedora fortaleceu habilidades de liderança, comunicação e foco no usuário. Busco uma oportunidade em um ambiente colaborativo onde eu possa continuar, evoluindo e contribuir com soluções tecnológicas eficientes e centradas no cliente.
      </p>
    </StyledSection>
  )
}