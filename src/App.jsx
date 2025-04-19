import Features from './Components/Features'
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
    </ThemeProvider>
  )
}

export default App