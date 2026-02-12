'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

//estrutura da função
export default function Footer () {
    return(
        <footer>
            <a
             href="https://github.com/flaviane-lima"
             target="blanck"
             rel="nooponer noreferrer"
            >
                <FaGithub size={28} />
            </a>

            <a
             href="https://www.linkedin.com/in/flaviane-delima/"
             target="blanck"
             rel="nooponer noreferrer"
            >
                <FaLinkedin size={28} />
            </a>

            <a
             href="email:rflaviane41@gmail.com"
            >
                <FaEnvelope size={28} />
            </a>
        </footer>
    )
}