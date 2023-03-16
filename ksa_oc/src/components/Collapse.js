import '../sass/components/collapse.scss'
import { useState } from 'react'
import arrow from '../assets/arrow.png'

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleTitleClick = () => {
    setIsOpen(!isOpen)
  }

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
      <div className="collapse_content">{content}</div>
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
