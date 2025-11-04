import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage/HomePage'
import { AboutPage } from './Pages/AboutPage/AboutPage'
import './App.css'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
