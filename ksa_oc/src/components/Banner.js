import '../sass/components/banner.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// On crée un composant Banner qui aura un className différent en fonction de son state
export default function Banner() {
  const [aboutPage, setAboutPage] = useState(false)

  // On récupère l'URL de la page
  const location = useLocation()

  // On crée un useEffect pour acutaliser le state en fonction du path
  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutPage(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // On a un render différent pour la page about et la page home
    <section className={aboutPage ? 'banner_about' : 'banner'}>
      {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  )
}
