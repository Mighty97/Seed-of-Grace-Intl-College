import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage/HomePage'
import { AboutPage } from './Pages/AboutPage/AboutPage'
import { CurriculumPage } from './Pages/CurriculumPage/CurriculumPage'
import './App.css'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='about' element={<AboutPage />} />
        <Route path='curriculum' element={<CurriculumPage />} />
      </Routes>
    </>
  )
}

export default App
