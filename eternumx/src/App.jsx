import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import AboutItem from './components/AboutItem'
import Songs from './components/Songs'
import SongItem from './components/SongItem'
import Contact from './components/Contact'
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai'

function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <About/>
      <Songs/>
      <Contact/>
    </div>
  )
}

export default App
