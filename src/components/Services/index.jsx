import React, { useEffect, useRef } from 'react'
import './Services.css'
import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Services = () => {

  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const el = container.current
    gsap.fromTo(".services__header",{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    x:0,
    opacity:1,
    duration:1,
    ScrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
)
  },[])

  return (
    <section id="services" ref={container}>
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <p className="text__muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your customers.
          </p>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className='icon' />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Our UI/UX design services transform ideas into intuitive,
                engaging experiences. We specialize in user-centered design,
                crafting interfaces that blend functionality with seamless
                navigation. From wireframing to prototyping, our process
                ensures every detail enhances user satisfaction and achieves

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* End UI/UX */}



          <article className="service" style={{'--color-primary':'var(--color-success)'}}>
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className='icon' />
              </div>
              <h3 className="title">FullStack </h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
              The MERN stack is a popular web development framework consisting of MongoDB, Express.js, React.js, and Node.js. It allows developers to build full-stack JavaScript applications with a single language, providing a seamless environment for both front-end and back-end development.

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* End fullstack */}



          <article className="service" style={{'--color-primary':'aqua'}}>
            <div className="service__top">
              <div className="icon__container">
                <TfiWrite className='icon' />
              </div>
              <h3 className="title">DSA</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
              Data Structures and Algorithms (DSA) involve organizing data and creating efficient processes for problem-solving, crucial for optimizing software performance and scalability, and are key in technical interviews.

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/*DSA*/}


        </div>
      </div>
    </section>
  )
}

export default Services