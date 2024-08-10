import React, { useEffect, useState,useRef } from 'react'
import { sumArray } from '../../helper'
import {projects} from '../../data'
import './Projects.css'
 import Card from './Card'



const tabs = [
  { name: "All" },
  { name: "UI/UX" },
  { name: "FullStack" },
  { name: "Apps" },
]



const Projects = () => {
  const [displayableProjects,setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemEls = useRef(new Array());

  useEffect(() => {
    const prevEl = itemEls.current.filter((_, index) => index < activeIndex);
    setOffset(
      sumArray(
        prevEl.map(item => item.offsetWidth)
      )
    )
    setIndicatorWidth(itemEls.current[activeIndex].offsetWidth)
  }, [activeIndex])

  const setProjects = (category) => {
    if (category === "All") {
      return setDisplayableProjects(projects)
    }
    const pro = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    setDisplayableProjects(pro)
  }

  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {
            tabs.map((tab, index) => (
              <button 
                ref={el => itemEls.current[index] = el}
                onClick={() => {
                  setActiveIndex(index)
                  setProjects(tab.name)
                }}
                key={index}
              >
                {tab.name}
              </button>
            ))
          }
          <span className="active__indicator" style={{left:`${offset}px`,width:`${indicatorWidth}px`}}></span>
        </nav>

        <div className="card__container">
          {
            displayableProjects.map((projects,index) => (
              <Card 
              title={projects.title}
              image={projects.image}
              data={projects.data}
              stack={projects.stack}
              key={index}
              />
            ))
          }
        </div>

      </div>
    </section >
  )
}

export default Projects