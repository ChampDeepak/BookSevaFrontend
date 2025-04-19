import Cta from './Components/Cta'
import Features from './Components/Features'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import LightHeaderD from './Components/LightHeaderD'
import Team from './Components/Team'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <LightHeaderD/>
      <HeroSection/>
      <Team/>
      <Features/>
      <Cta/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App