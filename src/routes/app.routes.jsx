import { Route, Routes,  } from "react-router-dom";

import { Home } from '../Pages/Home'
import { NewMovie } from '../Pages/NewMovie'

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<NewMovie/>}/>
      </Routes>
    
  )
}