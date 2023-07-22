import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";




function App() {
  return (
    <div>

       {/* NAvbar */}
       <NavbarComponent/>



       {/* Wrapper */}
       <div className="wrapper">
        <h2>wrapper</h2>
       </div>





       {/* Footer */}     
      <FooterComponent/>

    </div>
  );
}

export default App;
