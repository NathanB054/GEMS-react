import './App.sass'
import './components/login/page'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/page';
import Map from './components/map/page';
function App() {

  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/map' element={<Map/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
