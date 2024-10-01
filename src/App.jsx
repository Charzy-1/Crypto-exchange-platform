import { BrowserRouter } from "react-router-dom";

import { Contact, Feedbacks, Hero,  Navbar, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
   
  )
}

export default App
