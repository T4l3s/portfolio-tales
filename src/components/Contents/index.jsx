import React from 'react'
import home from '../../styles/home.module.css'

export const Contents = ({ title, content }) => {

  return (
    <div className={home.content}>
        <h3>{ title }</h3>
        <p className={home.message}>
          { content }
        </p>
    </div>
  )
}
