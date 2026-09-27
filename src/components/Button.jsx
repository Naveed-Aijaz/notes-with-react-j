import React from 'react'

const Button = ({text = "button", type, onClick = () => {} }) => {
  return (
     <>
     <button type={type || "button"} onClick={onClick} > {text} </button>
     
     </>
  )
}

export default Button