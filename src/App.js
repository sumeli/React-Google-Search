import React, { useState, useEffect } from 'react'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Routess } from './Components/Routess'

const getMode = () => {
  let mode_data = localStorage.getItem('mode_data')

  if (mode_data) {
    return JSON.parse(localStorage.getItem('mode_data'))
  }
  else {
    return [];
  }
}

const App = () => {
  const [darkTheme, setDarkTheme] = useState(getMode)

  useEffect(() => {
    localStorage.setItem('mode_data', JSON.stringify(darkTheme))
  }, [darkTheme])

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routess />
        <Footer />
      </div>
    </div>
  )
}

export default App
