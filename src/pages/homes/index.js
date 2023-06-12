import React from 'react'
import { Contents } from '../../components/Contents'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
    <Header />
    <Contents />
    </div>
  )
}