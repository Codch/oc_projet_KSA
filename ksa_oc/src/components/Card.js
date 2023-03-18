import '../sass/components/card.scss'
import { Link } from 'react-router-dom'

// On crée le composant Card avec id title et cover pour prop
export default function Card({ id, title, cover }) {
  return (
    // On crée un lien vers l'URL contenant l'id de la card
    <Link to={`/accomodation/${id}`} className="gallery_card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  )
}
