'use client'

import React from "react"
import styled from "styled-components"
import Footer from "./Footer"

const StyledWrapper = styled.div`
background-color:  #F3F4F6; /* cinza claro */
min-height: 100vh;
display: flex;
flex-direction: column;
padding-bottom: 80px; /* altura do footer para não encobrir conteúdo */

`

const Content = styled.main`
  flex: 1;
`

export default function PageWrapper({ children }: { children: React.ReactNode}) {
    return (
    <StyledWrapper>
        <Content>
            { children }
        </Content>
        <Footer />
    </StyledWrapper>
    )
}