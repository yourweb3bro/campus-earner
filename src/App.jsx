import { useState } from 'react'
import Home from './pages/home'
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <div className='container mx-auto flex flex-col items-center px-4 md:px-6'>
      <NavBar />

      <Home />
    </div>
  )
}

export default App
