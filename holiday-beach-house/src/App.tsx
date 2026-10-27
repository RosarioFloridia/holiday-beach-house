import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection titolo='La tua casa in Sicilia' testo='Vieni in sicilia a rilassarti' backgroundImage='#'/>
    </>
  )
}

export default App
