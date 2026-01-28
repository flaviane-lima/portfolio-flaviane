'use client'

import styled from "styled-components"

const StyledSection = styled.section`
 background-color: #F9FAFB;
 color: #333333;
 text-align: left;
 margin: 2rem auto;
 padding: 2rem;
 max-width: 1000px;        /* limita largura da seção inteira */
 border-radius: 10px;

 h2 {
   font-size:  1.75rem;
   font-weight: bold;
   margin: 0;
}

p {
   font-size: 1rem;
   margin: 0.5rem 0;
   color: #555;
   line-height: 1.6;
   }

   @media (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.75rem;
    }
  }

`

export default function AboutMe() {
    return (
        <StyledSection>
            <h2>Sobre Mim</h2>
            <p>
                Desenvolvedora Full-Stack em formação, em transição de carreira. Ex-empreendedora, aplico minha visão sistêmica e habilidades de liderança no desenvolvimento de aplicações web completas com JavaScript, TypeScript, Next.js, Node.js e Prisma ORM.
                Busco minha primeira oportunidade como desenvolvedora (Front-end, Back-end ou Full-Stack), onde possa contribuir com minha experiência multidisciplinar e consolidar minha trajetória técnica dentro de um time de tecnologia.
            </p>
        </StyledSection>
    )
}