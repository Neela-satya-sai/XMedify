import React from 'react'
import styles from "./Button.module.css"

function Button({children, style="secondary", type="button"}) {
  return (
    <button className={`${styles.button} ${styles[style]}`}  type={type} >{children}</button>
  )
}

export default Button