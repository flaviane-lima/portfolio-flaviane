'use client' 
import Header from "./components/Header"
import PageWrapper from "./components/PageWrapper"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"

export default function Page() {
  return (
    <PageWrapper>
      <Header />
        <AboutMe />
        <Projects />
    </PageWrapper>
      
    
  )
}