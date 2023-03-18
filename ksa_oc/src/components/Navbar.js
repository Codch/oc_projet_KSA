import '../sass/components/navbar.scss'
import { Link } from 'react-router-dom'

// On crée le composant Navbar en utilsant Link de react-router-dom pour avoir un lien vers la page home et la page about
export default function Navbar() {
  const currentRoute = window.location.pathname

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li
          className={
            currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'
          }
        >
          <Link to="/Kasa/">Accueil</Link>
        </li>
        <li
          className={
            currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'
          }
        >
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
