import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'
import Clock from './components/Clock'
import useRandomTheme from './lib/useRandomTheme'

function App() {
  const {theme, iconSet} = useRandomTheme(1000 * 60 * 5); // Change theme every 5 minutes

  return (
    <div className='App'>
      <div className='bg'/>

      <div className='widgets' style={theme}>  
        <Weather iconSet={iconSet}/>
        <Clock />
      </div>
    </div>
  )
}

export default App
