import React from 'react'
import './Skills.css'
import { experience } from '../../data'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <section id="skill">
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">My Skills</h2>
        </div>
        <div className="skill__container">
          {
            experience.map((list,index) => (
              <SkillCard
              {...list}
              key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills