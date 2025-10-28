import {lazy} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const UserRoutes = lazy(()=> import("./routes/UserRoutes"))

const App = ()=>{

  return(
  <BrowserRouter>
 <Routes>
  <Route path="/*" element={<UserRoutes/>}/>

 </Routes>
  
  </BrowserRouter>
    
  )
}

export default App