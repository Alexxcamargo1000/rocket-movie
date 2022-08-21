import { Route, Routes,  } from "react-router-dom";

import { Home } from '../Pages/Home'
import { New } from '../Pages/New'
import { Preview } from '../Pages/Preview'

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/preview" element={<Preview/>}/>
      </Routes>
    
  )
}