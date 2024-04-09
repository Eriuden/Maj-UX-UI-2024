import './App.css'
import ButtonGradient from "./assets/svg/ButtonGradient"
import { Benefits } from './components/Benefits'
import { Collab } from './components/Collab'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Benefits/>
        <Collab/>
      </div>
      <ButtonGradient/>
    </>    
  )
}

export default App
