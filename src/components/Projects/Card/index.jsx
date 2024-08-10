import React, { useState } from 'react'
import './Card.css'
import { AiOutlineShareAlt } from 'react-icons/ai';
const Card = (props) => {

  const [openStackExpendBar, setOpenStackExpendBar] = useState(false);



  return (
    <div className='card'>
      <div className="picture">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="card__details">
        <div className="card__details__top">
          <h2 className="title">{props.title}</h2>
        </div>

        <div className="card__details__middle">
          <p className="description">{props.data.description}</p>
        </div>

        <div className="card__details__bottom">
          <div className='stack__container'>
            <div className="stack__left">Stack</div>
            <div className="stack__right">
            <div className="stack__box__container">
              {
                props.stack.map((list, index) => {
                  if (index < 4) {
                    return (
                      <div className='stack__box'>
                        <div className="stack__icon__container">
                          <span className="stack__icon" style={{ color: list.iconColor }}>
                            {list.icon}
                          </span>
                          <span className="stack__name">
                            {list.name}
                          </span>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div> {/* End of stack__box__container*/}
            {
              props.stack.lenght > 4 ? (
                <div className="stack__view__more">
                  <div className="more__btn" onClick={() => setOpenStackExpendBar(!openStackExpendBar)}></div>
                  <div
                    className={`stack__expend__box ${openStackExpendBar ? "open__stack__expend__box" : ""}`}
                  >
                    <h3 className="title">More Stack Use</h3>
                    <div className="stack__box__container">
                      {
                        props.stack.map((list, index) => {
                          if (index >= 4) {
                            return (
                              <div className='stack__box'>
                                <div className="stack__icon__container">
                                  <span className="stack__icon" style={{ color: list.iconColor }}>
                                    {list.icon}
                                  </span>
                                  <span className="stack__name">
                                    {list.name}
                                  </span>
                                </div>
                              </div>
                            )
                          }
                        })
                      }
                    </div>
                  </div>
                </div>
              ):""
            }
          </div>
        </div>  {/* End of stack__container */}
          <div className="button__container">
            <a href={props.data.demoLink}
             target ='_blank' className='btn btn__primary' rel="noopener noreferrer">Demo</a>

            <div className="btn__share">
            <a href={props.data.shareLink}
             target='_blank' rel="noopener noreferrer"><AiOutlineShareAlt/></a>
            </div>
            {/* <div className="btn__share"><AiOutlineShareAlt /></div> */}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Card