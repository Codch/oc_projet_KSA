import '../sass/pages/home.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

// On crée le composant Home qui sera render pour le path /Home en réutilisant les composants Header Banner Gallery et Footer
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  )
}
