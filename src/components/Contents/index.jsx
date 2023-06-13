import React from 'react'
import home from '../../styles/home.module.css'
import { Paragraphs } from '../paragrafs'


export const Contents = ({ title , content }) => {

  return (
    <div className={home.content}>
        <h3>{ title }</h3>
        {content.map((content, key) => (
          <Paragraphs
          content={content.message}
          key={key}
          />
        ))}
    </div>
  )
}
