import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./Home.jsx"
import Detalhes from "./Detalhes.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
