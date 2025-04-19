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
    </ThemeProvider>
  )
}

export default App