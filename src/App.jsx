import "tailwindcss";
import './App.css'
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Cta from "./Components/Cta";
import Case from "./Components/Case";
import Process from "./Components/Process";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Use from "./Pages/Use";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";

import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/use" element={<Use/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  
  )
}

export default App
