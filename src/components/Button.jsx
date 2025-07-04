import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({href = '/'}) => {
  return (
      <Link href={href}></Link>
  )
}

export default Button