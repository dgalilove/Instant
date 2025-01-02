import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUpLogin } from './pages/SignUpLogin'

function App() {
  return (
    <Router>
      <section className='app'>
        <main className='main-layout'>
          <Routes>
            <Route element={<SignUpLogin />} path='/' />
          </Routes>

        </main>
      </section>
    </Router>

  )
}

export default App
