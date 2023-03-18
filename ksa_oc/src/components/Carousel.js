import '../sass/components/carousel.scss'
import ArrowRight from '../assets/arrow_right.png'
import ArrowLeft from '../assets/arrow_left.png'
import { useState } from 'react'

// On crée le composant Carousel avec pour prop imageSlider
export default function Carousel({ imageSlider }) {
  // On crée un state qui servira à determiner l'index de l'image à afficher
  const [picturesIndex, setPicturesIndex] = useState(0)

  // On crée une cosntante nextSlide pour augmenter le state de 1 ou retourner à 0 si l'on est déjà sur la dernière image
  const nextSlide = () => {
    setPicturesIndex(picturesIndex + 1)
    if (picturesIndex === imageSlider.length - 1) setPicturesIndex(0)
  }

  // On crée une cosntante prevSlide pour diminuer le state de 1 ou aller au dernier index si l'on est sur la première image
  const prevSlide = () => {
    setPicturesIndex(picturesIndex - 1)
    if (picturesIndex === 0) setPicturesIndex(imageSlider.length - 1)
  }
  // On affiche en backgrounImage l'image provenant de l'URL contenu dans imageSlider et l'index de tableau grâce à picturesIndex
  // On affiche les flêches et le slideCount seulement s'il y a plusieurs images
  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[picturesIndex]})` }}
      className="carousel"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <p className="slideCount">
            {picturesIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  )
}
