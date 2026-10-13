import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ClassTwo from './pages/ClassTwo'
import ClassThree from './pages/ClassThree'
import Error404 from './pages/Error404'
import ClassFive from './pages/ClassFive'
import ClassEight from './pages/ClassEight'
import ClassNine from './pages/ClassNine'
import ProductDescription from './pages/ProductDescription'
import Books from './pages/Books'
import BookDetailsPage from './pages/BookDetailsPage'
import StudentsReg from './pages/StudentsReg'
import { ToastContainer } from 'react-toastify'
import StudentsPage from './pages/StudentsPage'
import StudentDetailsPage from './pages/StudentDetailsPage'

function App() {
  return (
    <Routes>
     
      <Route path='/' element={<Homepage/>} />
      <Route path='/classtwo' element={<ClassTwo/>}/>
      <Route path='/classthree' element={<ClassThree/>}/>
      <Route path='/classfive' element={<ClassFive/>}/>
      <Route path='/classeight' element={<ClassEight/>}/>
      <Route path="/classnine" element={<ClassNine/>}/>
      <Route path="/classnine/:id" element={<ProductDescription/>}/>
      <Route path='/naijabooks' element={<Books/>}/>
      <Route path='/naijabooks/:id' element={<BookDetailsPage/>}/>
      <Route path='/create-students' element={<StudentsReg/>}/>
      <Route path='/students' element={<StudentsPage/>}/>
      <Route path='/students/:id' element={<StudentDetailsPage/>}/>
      <Route path='*' element={<Error404/>}/>

    </Routes>
  )
}

export default App