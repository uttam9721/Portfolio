import React from 'react'
import './SkillCard.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const SkillCard = ({
  data,
  title
}) => {
  return (
    <div className='skill__card'>
      <h3>{title}</h3>
      <div className="skill__content">
        {
          data.map((list,index) => (
            <article className="skill__details" key={index}>
              <p></p>
              <BsPatchCheckFill className='skill__icon' />
              <div>
                <h4 className="skill__name">{list.skill}</h4>
                <small className="text__muted skill__level">{list.level}</small>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default SkillCard