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
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const aboutMeClick = () => {
    setTitle([])
    setContent()
    axios.get(`http://127.0.0.1:5000/aboutme`)
    .then((res) => {setTitle(res.data.title); setTitle(res.data.content)})
  }

  const initialClick = () => {
    setTitle([])
    setContent([])
    axios.get(`http://127.0.0.1:5000/initial`)
    .then((res) => {setTitle(res.data.title); setContent(res.data.content);})
  }

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/aboutme`)
    .then((res) => {setTitle(res.data.title); setContent(res.data.content);})
  }, [])

  return (
    <div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: 0, height: 512}}>
        <Header initial={initialClick} aboutme={aboutMeClick}/>
        <Divider style={{marginLeft: -50, marginRight: 25}} orientation='vertical' variant='middle' flexItem theme={darkTheme}>
          P
        </Divider>
        <Contents
        title={title}
        content={content}
        />
      </div>
      <Divider style={{marginTop: '1%'}} orientation='horizontal' variant='middle' flexItem theme={darkTheme}>
        P
      </Divider>
        <Footer />
    </div>
  )
}