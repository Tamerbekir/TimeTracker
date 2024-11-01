import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Calendar from './Pages/Calendar'
// import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='user' element={<Calendar />} />
    </Routes>
  )
}

export default App
