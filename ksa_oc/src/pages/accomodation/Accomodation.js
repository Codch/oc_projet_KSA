import './accomodation.scss'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
// import Collapse from '../../components/collapse/Collapse'
import Carousel from '../../components/carousel/Carousel'
import { datas } from '../../data/data'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([])

  const { id } = useParams()
  const idAccomodation = id
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  )

  useEffect(() => {
    setImageSlider(dataCurrentAccomodation[0].pictures)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idAccomodation])

  return (
    <div>
      <Header />
      <Carousel imageSlider={imageSlider} />
      <Footer />
    </div>
  )
}
