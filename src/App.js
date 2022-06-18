import './App.css';
import { NavLink, Routes, Route  } from 'react-router-dom';
import ConnectionManagement from './views/ConnectionManagement';
import Home from './views/home';
import WalletManagement from './views/WalletManagement';
import Invitations from './views/Invitations';
import Proofid from './views/Proofid';
import Proofcred from './views/Proofcred';
import Checkid from './views/Checkid';
import Checkcred from './views/Checkcred';


function App() {
  return (
    <>
      <header className="navbar sticky-top bg-colorhead flex-md-nowrap p-0 shadow ">
      <div style={{width: "100%"}}>
      <img className="aena" src="aena.png"/>
      <h6 className="aenatitle">Spanish airport management</h6>
      </div>
    </header>

     <div style={{height: "700px"}} className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-color sidebar collapse sidebar" >
          
        <ul style={{ marginTop: "10%" }} className="nav flex-column">
              <NavLink className="link" to="/">Home</NavLink>
              <NavLink className="link" to="/ConnectionManagement">Connection Management</NavLink>
              <NavLink className="link" to="/WalletManagement">Wallet Management</NavLink>
              <NavLink className="link" to="/Invitations">Get Invitations</NavLink>
            </ul>
            
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ConnectionManagement" element={<ConnectionManagement />} />
                <Route path="/WalletManagement" element={<WalletManagement />} />
                <Route path="/Proof" element={<Proofid />} />
                <Route path="/Checkid" element={<Checkid />} />
                <Route path="/Checkcred" element={<Checkcred />} />
                <Route path="/Proofcred" element={<Proofcred />} />
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
