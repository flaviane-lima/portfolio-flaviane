'use client'
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center; /* Espaçamento entre os itens */
  gap: 30px;
  padding: 20px;
  background-color: #1E3A8A;
  color: white;
  position: fixed; /*fixa na tela */
  bottom: 0;         /* cola no fim da viewport */
  width: 100%;       /* ocupa toda a largura */
  height: 80px;      /* altura usada no padding-bottom do Content */

  a {
    color: white;
    transition: all 0.3s ease;
  }

  a:hover {
    transform: translateY(-3px);
    color:  #93C5FD;
  }
  
`

//estrutura da função
export default function Footer () {
    return(
        <FooterContainer>
            <a
             href="https://github.com/flaviane-lima"
             target="_blanck"
             rel="nooponer noreferrer"
            >
                <FaGithub size={28} />
            </a>

            <a
             href="https://www.linkedin.com/in/flaviane-delima/"
             target="_blanck"
             rel="nooponer noreferrer"
            >
                <FaLinkedin size={28} />
            </a>

            <a
             href="mailto:email:rflaviane41@gmail.com"
            >
                <FaEnvelope size={28} />
            </a>
        </FooterContainer>
    )
}