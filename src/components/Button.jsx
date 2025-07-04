import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({href, children, className, id}) => {
  return (
      <a href={href} className={`cta-wrapper ${className ?? ''}`}>
          <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text">{children}</p>
              <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
              </div>
          </div>
      </a>
  )
}

export default Button