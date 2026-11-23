import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CredibilityBar from './component/CredibilityBar'
import Expertise from './component/Expertise'
import OperationalInsight from './component/OperationalInsight'
import Experience from './component/Experience'
import Approach from './component/Approach'
import AppliedProjects from './component/AppliedProjects'
import EducationCredentials from './component/EducationCredentials'
import ContactCTA from './component/ContactCTA'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <CredibilityBar />
    <Expertise />
    <OperationalInsight />
    <Experience />
    <Approach />
    <AppliedProjects />
    <EducationCredentials />
    <ContactCTA />
    <Footer />
    </>
  )
}

export default App
