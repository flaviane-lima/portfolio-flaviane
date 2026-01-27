'use client'

import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
background-color:  #F3F4F6; /* cinza claro */
min-height: 100vh;
display: flex;
flex-direction: column;

`

export default function PageWrapper({ children }: { children: React.ReactNode}) {
    return <StyledWrapper>{ children }</StyledWrapper>
}