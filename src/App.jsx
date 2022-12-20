import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Developer from './components/Developer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
AOS.init();

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
