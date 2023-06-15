import React from 'react'
import home from '../../styles/home.module.css'

export const Paragraphs = ({ content, breakline }) => {
  return (
    <p className={home.message}>
      { content }
    </p>
  )
}
