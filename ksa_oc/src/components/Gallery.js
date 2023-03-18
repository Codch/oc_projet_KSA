import '../sass/components/gallery.scss'
import { datas } from '../data/data'
import Card from './Card'

// On crée le composant Gallery qui nous servira à afficher toutes les Cards
// On fait une liste avec .map qui créera une Card pour chaque objet dans datas en lui passant les données à afficher dans ses props
export default function Gallery() {
  return (
    <main className="home_gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        )
      })}
    </main>
  )
}
