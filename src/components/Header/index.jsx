import React from 'react'
import home from '../../styles/home.module.css'

export const Header = ({ aboutme, initial }) => {
  return (
    <div className={home.header}>
        <a onClick={() => initial()} className={home.topics}>Inicial</a>
        <a onClick={() => aboutme()} className={home.topics}>Sobre mim</a>
        <a className={home.topics}>Projetos</a>
    </div>
  )
}
