import { Route, Routes,  } from "react-router-dom";

import { Home } from '../Pages/Home'
import { New } from '../Pages/New'

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
    
  )
}