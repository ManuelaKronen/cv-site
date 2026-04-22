import Navbar from './components/Navbar'
import Header from './components/Header'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import TechStack from './components/TechStack'
import Languages from './components/Languages'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <WorkExperience />
        <Education />
        <Certificates />
        <TechStack />
        <Languages />
      </main>
      <Footer />
    </>
  )
}
