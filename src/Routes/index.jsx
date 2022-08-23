
import { Routes, Route } from 'react-router-dom'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
 

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<h1>Hola soy Home</h1>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>



    </Routes>
  )
}

export default MainRoutes