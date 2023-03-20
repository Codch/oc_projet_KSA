import '../sass/components/collapse.scss'
import { useState } from 'react'
import arrow from '../assets/arrow.png'

// On crée le composant Collapse avec pour prop tilte et content qui pourra être ouvert ou fermer en fonction de son state
export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  // On crée un fonction pour inverser l'état du state entre false et true
  const handleTitleClick = () => {
    setIsOpen(!isOpen)
  }

  // On crée deux render, un avec un div content si isOpen est true, un sans si isOpen est false
  // On met un fonction onClick dans les deux cas sur le h3 pour passer d'un state à l'autre
  return isOpen ? (
    <div className="collapse">
      <h3 className="collapse_title" onClick={handleTitleClick}>
        {title}
        <img
          className="arrow arrow_up"
          src={arrow}
          alt="arrow to show or unshow content"
        />
      </h3>
      <div className="collapse_content">
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          : content}
      </div>
    </div>
  ) : (
    <div className="collapse">
      <h3 className="collapse_title" onClick={handleTitleClick}>
        {title}
        <img
          className="arrow arrow_down"
          src={arrow}
          alt="arrow to show or unshow content"
        />
      </h3>
    </div>
  )
}
