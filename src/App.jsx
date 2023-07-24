import { useActionData } from "react-router-dom";
import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";

import {Routes,Route} from 'react-router-dom';
import HomePage from "./pages/Home.page";
import FaqPage from "./pages/Faq.page";
import ContactUsPage from "./pages/ContactUs.page";
import AboutUsPage from "./pages/AboutUs.page";
import CoinPage from "./pages/Coin.page";




function App() {
  return (
    <div>

       {/* NAvbar */}
       <NavbarComponent/>



       {/* Wrapper */}
       <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
          </Routes>
       </div>





       {/* Footer */}     
      <FooterComponent/>

    </div>
  );
}

export default App;

//Routes
// /
// /faq
// /about-us
// /contact-us