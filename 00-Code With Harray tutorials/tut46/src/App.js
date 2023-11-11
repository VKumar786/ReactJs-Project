import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/extract'
import { Home, About } from './pages/extract'

//* context
import NoteState from './contexts/notes/NoteState'

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App