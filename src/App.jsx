import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Reviews from "./components/Review"
import Services from "./components/ServiceSection"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Reviews />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
