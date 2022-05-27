
import './App.css';
import { NavLink, Routes, Route  } from 'react-router-dom';
import ConnectionManagment from './views/ConnectionManagment';
import Home from './views/home';
import WalletManagment from './views/WalletManagment';
import Invitations from './views/Invitations';
import Proof from './views/Proof';
import Proofr2 from './views/Proofr2';
import Check from './views/Check';


function App() {
  return (
    <>
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <h1 className="navbar-brand col-md-3 col-lg-2 me-0 px-3">verifier App: AENA </h1>
    </header>

    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/ConnectionManagment">Connection Managment</NavLink>
              <NavLink to="/WalletManagment">Wallet Managment</NavLink>           
              <NavLink to="/Invitations">Get Invitations</NavLink>

            </ul>
          </div>
          <div>

          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ConnectionManagment" element={<ConnectionManagment />} />
                <Route path="/WalletManagment" element={<WalletManagment/>} />
                <Route path="/Proof" element={<Proof />} />
                <Route path="/Proofr2" element={<Proofr2/>} />
                <Route path="/Invitations" element={<Invitations />} />
                <Route path="/Check" element={<Check />} />
              </Routes>

          </>

          <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

        </main>
      </div>

    </div>
  </>
  );
}

export default App;
