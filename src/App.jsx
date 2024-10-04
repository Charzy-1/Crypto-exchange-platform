import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { TrustUsSection, Feedbacks, Hero, Navbar, HowItWorks, Rate, Admin, Contact, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route 
          path="/" 
          element={
            <div className="relative z-0 bg-white ">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <TrustUsSection />
              <Rate />
              <Feedbacks />
              <HowItWorks />
              <Contact />
              <Footer />
            </div>
          } 
        />
        
        {/* Admin route */}
        <Route path="/admin" element={<Admin />} /> {/* Admin section */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
