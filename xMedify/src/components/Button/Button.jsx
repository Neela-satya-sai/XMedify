import React from 'react'
import styles from "./Button.module.css"

function Button({children, style="secondary", type="button", id="", handlerfun }) {
  return (
    <button className={`${styles.button} ${styles[style]}`}   type={type}  id={id}  onClick={handlerfun}>{children}</button>
  )
}

export default Button