import HeroSection from './Components/HeroSection'
import LightHeaderD from './Components/LightHeaderD'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <LightHeaderD/>
      <HeroSection/>
    </ThemeProvider>
  )
}

export default App