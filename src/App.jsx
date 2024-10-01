import { BrowserRouter } from "react-router-dom";

import { TrustUsSection, Feedbacks, Hero,  Navbar, HowItWorks, Contact, Footer } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <TrustUsSection />
        <Feedbacks />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
