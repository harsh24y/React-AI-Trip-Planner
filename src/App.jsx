import { useState } from 'react'
import './App.css'
import  { Button } from './components/ui/button';
import { hydrateRoot } from 'react-dom/client';
import Hero from './components/custom/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     { /* hero */}
       <Hero/>
    </>
  )
}

export default App
