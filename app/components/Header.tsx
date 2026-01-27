'use client'


import styled from "styled-components";

const StyledHeader = styled.header`
 background-color: #1E3A8A;
 color: white;
 text-align: center;
 padding: 2rem 1rem;

 h1 {
   font-size: 1.875rem;
   font-weight: bold;
   margin: 0;
}
   p {
   font-size: 1rem;
   margin-top: 0.5rem;
   color: #E0E7FF; /* azul claro para contraste */
   max-width: 600px; /* limita largura para não ficar muito esticado */

   }

   @media (max-width: 600px) {
     h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.875rem;
    }
   }

   @media (max-width: 400px) {
      h1 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.75rem;
    }
 }
`

export default function Header() {
    return (
    <StyledHeader>
        <h1>Flaviane de Lima</h1>
        <p>A tecnologia é uma ponte entre ideias e impactos</p>
    </StyledHeader>
    
    )
}