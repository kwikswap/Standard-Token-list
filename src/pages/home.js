import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import AllLists from '../components/allLists'

import '../index.css'

const Content = styled.div`
  display: grid;
  // grid-template-columns: 460px 1fr;
  grid-template-columns: 1fr;
  grid-gap: 48px;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    width: 100%;
  }
`

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
    fetch('https://tokens.kwikswap.org/tokenlist_kwikswap.json',{
      method:"GET",
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "https://tokens.kwikswap.org/tokenlist_kwikswap.json"
    }).then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }, [])
  return (
    <div className="app">
      <Header />
      <Content>
        <Hero />
        <AllLists />
      </Content>
    </div>
  )
}

export default Home
