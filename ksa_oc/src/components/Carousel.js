import '../sass/components/carousel.scss'
import ArrowRight from '../assets/arrow_right.png'
import ArrowLeft from '../assets/arrow_left.png'
import { useState } from 'react'

export default function Carousel({ imageSlider }) {
  const [picturesIndex, setPicturesIndex] = useState(0)

  const nextSlide = () => {
    setPicturesIndex(picturesIndex + 1)
    if (picturesIndex === imageSlider.length - 1) setPicturesIndex(0)
  }

  const prevSlide = () => {
    setPicturesIndex(picturesIndex - 1)
    if (picturesIndex === 0) setPicturesIndex(imageSlider.length - 1)
  }

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
