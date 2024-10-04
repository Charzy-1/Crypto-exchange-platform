import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero, Admin, TrustUsSection, Feedbacks, Navbar, HowItWorks, Rate, Contact, Footer, TermsAndConditions, PrivacyPolicy } from "./components"; // Import new components

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
        <Route path="/terms" element={<TermsAndConditions />} /> {/* Terms and Conditions page */}
        <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Privacy Policy page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
