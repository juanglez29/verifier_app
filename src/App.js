
import './App.css';
import { NavLink, Routes, Route  } from 'react-router-dom';
import ConnectionManagment from './views/ConnectionManagment';
import Home from './views/home';
import WalletManagment from './views/WalletManagment';
import Invitations from './views/Invitations';
import Proof from './views/Proof';
import Proofr2 from './views/Proofr2';
import Checkid from './views/Checkid';
import Checkcred from './views/Checkcred';


function App() {
  return (
    <>
      <header className="navbar sticky-top bg-colorhead flex-md-nowrap p-0 shadow ">
      <div style={{width: "100%"}}>
      <img className="aena" src="aena.png"/>
      <h6 className="aenatitle">Spanish airport managment</h6>
      </div>
    </header>

     <div style={{height: "700px"}} className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-color sidebar collapse sidebar" >
          
        <ul style={{ marginTop: "10%" }} className="nav flex-column">
              <NavLink className="link" to="/">Home</NavLink>
              <NavLink className="link" to="/ConnectionManagment">Connection Managment</NavLink>
              <NavLink className="link" to="/WalletManagment">Wallet Managment</NavLink>
              <NavLink className="link" to="/Invitations">Get Invitations</NavLink>
            </ul>
            
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ConnectionManagment" element={<ConnectionManagment />} />
                <Route path="/WalletManagment" element={<WalletManagment />} />
                <Route path="/Proof" element={<Proof />} />
                <Route path="/Checkid" element={<Checkid />} />
                <Route path="/Checkcred" element={<Checkcred />} />
                <Route path="/Proofr2" element={<Proofr2 />} />
                <Route path="/Invitations" element={<Invitations />} />
              </Routes>
            </>
          </main>

          <footer className="footer fixed-bottom">
             <img className="footerimg2" src="aena2.png" />
             <img className="footerimg" src="footerfom.png" />
          </footer>
          
        </div>
   
    </>
  );
}

export default App;
