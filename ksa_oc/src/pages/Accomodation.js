import '../sass/pages/accomodation.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Collapse from '../components/Collapse'
import greyStar from '../assets/grey_star.png'
import redStar from '../assets/red_star.png'
import Carousel from '../components/Carousel'
import { datas } from '../data/data'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// On crée le composant Accomodation qui sera render pour le path /accomodation/:id et qui réutilisera les composants Footer Header et Collapse
// On crée un state qui un tableau contenant le ou les URL des images à afficher. imageSlider servira lui même de prop au composant Carousel
export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([])

  // On récupère l'id contenu dans l'URL puis on utilise .filter pour n'avoir que l'objet contenant cet id
  const { id } = useParams()
  const idAccomodation = id
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  )

  // On récupère le tableau contenant les URL dans les datas en s'assurant que la valeur ne soit pas undefined
  const pictures =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].pictures
      : ''

  // On crée un useEffect pour mettre à jour le state avec pictures à chaque fois que l'id de l'URL change
  useEffect(() => {
    setImageSlider(pictures)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idAccomodation])

  // On met dans des const toutes les données dont on a besoin en s'assurant que leur valeur ne soit pas undefined
  const name =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].host.name.split(' ')
      : ''
  const hostPictures =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].host.picture
      : ''
  const rating =
    dataCurrentAccomodation.length > 0 ? dataCurrentAccomodation[0].rating : ''
  const description =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].description
      : ''
  const equipments =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].equipments
      : ''

  const location =
    dataCurrentAccomodation.length > 0
      ? dataCurrentAccomodation[0].location
      : ''

  const tags =
    dataCurrentAccomodation.length > 0 ? dataCurrentAccomodation[0].tags : ''

  const title =
    dataCurrentAccomodation.length > 0 ? dataCurrentAccomodation[0].title : ''

  // On s'assure que notre id soit valide dans l'URL en vérifiant le length de dataCuurentAccomodation
  // s'il n'est pas supérieur à 0 alors on utilie Naviguate pour aller sur le path /error
  //Pour les étoiles, on .map dans unu Array(5) avec une constante index +1 pour simuler un index de 1 à 5 tant que rating est >= à la constante on affiche
  // une étoile rouge, sinon grise
  return dataCurrentAccomodation.length > 0 ? (
    <div>
      <Header />
      <Carousel imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              {dataCurrentAccomodation.length > 0
                ? tags.map((tag, index) => {
                    return <button key={index}>{tag}</button>
                  })
                : ''}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              {dataCurrentAccomodation.length > 0 ? (
                <img src={hostPictures} alt="host of this accomodation" />
              ) : (
                ''
              )}
            </div>

            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/error" />
  )
}
