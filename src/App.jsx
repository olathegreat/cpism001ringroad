import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ClassTwo from './pages/ClassTwo'
import ClassThree from './pages/ClassThree'
import Error404 from './pages/Error404'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/classtwo' element={<ClassTwo/>}/>
      <Route path='/classthree' element={<ClassThree/>}/>
      <Route path='*' element={<Error404/>}/>

    </Routes>
  )
}

export default App