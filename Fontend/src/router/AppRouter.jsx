import { Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import MyBlog from '../pages/MyBlog'
import Viaje from '../pages/Viaje'
import Nacional from '../pages/Nacional'
import Internacional from '../pages/Internacional'
import Dashboard from '../pages/Dashboard/Dashboard'
// import UpdatePost from '../pages/Dashboard/UpdatePost'
// import CrearPost from '../pages/Dashboard/CrearPost'

const AppRouter = () => {
  return (
    <Routes>
       <Route>
          <Route path='/viajar'element={<Viaje/>}></Route>
          <Route path='/viajar/nacional' element={<Nacional/>}></Route>
          <Route path='/viajar/internacional' element={<Internacional/>}></Route> 
          <Route path='/MyBlog' element={<MyBlog/>}></Route> 
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          {/* <Route path='/dashboard/UpdatePost' element={<UpdatePost/>}></Route>     */}
       </Route>
    </Routes>
  )
}

export default AppRouter
