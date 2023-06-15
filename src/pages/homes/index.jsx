import { createTheme, Divider } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Contents } from '../../components/Contents'
import { Header } from '../../components/Header'
import { Footer } from '../footer'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Home = () => {

  const [title, setTitle] = useState('Opa, bão?')
  const [content, setContent] = useState(['Bem-vindo(a) ao meu portfólio.', 'Aqui ao lado você pode vê algumas coisas sobre mim e que eu fiz, não é muita coisa :)'])

  const initialClick = () => {
    setTitle('Opa, bão?')
    setContent(['Bem-vindo(a) ao meu portfólio.', 'Aqui ao lado você pode vê algumas coisas sobre mim e que eu fiz, não é muita coisa :)'])
  }

  const handleClick = () => {
    setTitle('aaaaaaaaa')
    setContent('aaaaaaaaa')
  }

  return (
    <div>

      <div style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: 0, height: 512}}>
        <Header aboutme={handleClick} initial={initialClick}/>
        <Divider style={{marginLeft: -50, marginRight: 25}} orientation='vertical' variant='middle' flexItem theme={darkTheme}>
        </Divider>
        <Contents title={title} content={content}/>
      </div>
      <Divider style={{marginTop: '1%'}} orientation='horizontal' variant='middle' flexItem theme={darkTheme}>
      </Divider>
        <Footer />
    </div>
  )
}