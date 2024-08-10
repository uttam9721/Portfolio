import React,{useEffect, useRef} from 'react'
import './About.css'
import Profile2 from '../../images/profile-2.jpg';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const About = () => {


  const container = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
      const el = container.current;
      gsap.fromTo(".about__container",{
        scale:0.7
      },{
        scale:1,
        ScrollTrigger:{
          trigger:el,
          scrub:true,
        }
      }
    )
    },[])
  



  return (
      <section id="about" ref={container} >
        <div className="section__wrapper about__container">
          <div className="me__container blur-effect">
            <div className="photo__container" >
              <img src={Profile2} alt="" />
            </div>
          </div>
          <div className="section__header">
            <h2 className="primary__title">About Me</h2>
            <h1 className="title">I am <span className="color__primary">Uttam Kumar</span></h1>
            <p className="text__muted description">
            A motivated and detail-oriented Full stack web developer with a solid foundation in both front-end and back-end technolo-
gies. Eager to apply my skills in HTML, CSS, JavaScript, React, Node.js,Express.js and MongoDB management to build and
enhance web applications. Seeking an entry-level position to leverage my technical skills and passion for continuous learning
to contribute to innovative web development projects.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About