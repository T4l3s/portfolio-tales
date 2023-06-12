import React from 'react'
import home from '../../styles/home.module.css'

export const Header = () => {
  return (
    <div className={home.header}>
        <a className={home.topics}>Inicial</a>
        <a className={home.topics}>Projetos</a>
        <a className={home.topics}>Contatos</a>
    </div>
  )
}
