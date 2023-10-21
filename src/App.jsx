import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Timeline from './views/Timeline'
import Login from './views/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Timeline />} exact></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
