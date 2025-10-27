import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/landing/Landing"

const App = ()=>{


  return(
  <BrowserRouter>
 <Routes>
  <Route path="/" element={<LandingPage/>}/>
 </Routes>
  
  </BrowserRouter>
    
  )
}

export default App