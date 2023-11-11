import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'

import DarkModeContext from './context/DarkModeContext'

const light = {
  backgroundColor: '#fff',
  color: '#262626',
  minHeight: '100vh'
}

const dark = {
  backgroundColor: '#262626',
  color: '#fff',
  minHeight: '100vh'
}

function App() {
  const [theme] = useContext(DarkModeContext)

  return (
    <div style={theme === 'light' ? light : dark}>
      <Navbar
        title="TextUtils"
        links={[
          {
            title: 'about',
            url: '/about'
          },
          {
            title: 'contact',
            url: '/contact'
          },
          {
            title: 'service',
            url: '/service'
          }
        ]}
      />


      <Routes>
        <Route path='/' element={
          <TextForm
            heading="Anaylze text 🔥"
            labeling="Enter Text 🐹"
          />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
