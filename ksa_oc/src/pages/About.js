import '../sass/pages/about.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

// On crée le composant About qui sera render pour le path /About qui se servira des composants Header Banner Collapse et Footer
export default function About() {
  //On crée un tableau pour les données à afficher
  const aboutDatas = [
    {
      id: 1,
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      id: 2,
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: 3,
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  // On fait une liste avec un .map pour chaque objet contenu dans aboutDatas qui affichera le composant Collapse avec les props title et content
  return (
    <div>
      <Header />
      <Banner />
      <main className="about_main">
        {aboutDatas.map((data) => {
          return (
            <div key={data.id} className="about_main_collapse">
              <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </main>
      <Footer />
    </div>
  )
}
