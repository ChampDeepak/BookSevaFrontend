import Cta from './Components/Cta'
import Features from './Components/Features'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import LightHeaderD from './Components/LightHeaderD'
import Team from './Components/Team'
import { ThemeProvider } from './Context/ThemeContext'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Services from './Pages/Services'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
          <LightHeaderD/>
          <Routes>
              <Route path='/' element={<><HeroSection/> <Team/> <Features/> <Cta/></>}></Route>
              <Route path='/About' element={<About/>} ></Route>
              <Route path='/Blog' element={<Blog/>}></Route>
              <Route path='/Contact' element={<Contact/>}></Route>
              <Route path='/Services' element={<Services/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App