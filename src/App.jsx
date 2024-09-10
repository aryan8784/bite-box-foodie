import './App.css'
import Banner from './Components/Banner'
import Blog from './Components/Blog'
import Category from './Components/Category'
import FeatureSectionBreakfast from './Components/FeatureSectionBreakfast'
import FeatureSectionFruits from './Components/FeatureSectionFruits'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <main>
        <Navbar />
        <Hero/>
        <Category/>
        <FeatureSectionFruits/>
        <FeatureSectionBreakfast/>
        <Banner/>
        <Blog/>
        <Footer/>
      </main>
    </>
  )
}

export default App
