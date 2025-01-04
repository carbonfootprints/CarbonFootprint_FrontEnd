import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext'; 
import Login from './pages/Login';
import Home from './pages/Home';
import CalculateHome from './pages/CalculateHome';
import ProductionSystem from './components/ProductionSystem';
import Boundary from './components/Boundary';
import DirectGHG from './components/DirectGHG';
import IndirectGHG from './components/IndirectGHG';
import Report from './components/Report';
import Navbar from './pages/Navbar';
function App() {
  return (
    <BrowserRouter>  {/* Wrap the entire app in BrowserRouter */}
      <AuthProvider>  {/* Then wrap in AuthProvider */}
        <div className="App">
          <Navbar />  {/* The Navbar component will now have access to global auth state */}
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/home" Component={Home} />
            <Route path="/calci" Component={CalculateHome} />
            <Route path="/production" Component={ProductionSystem} />
            <Route path="/boundary" Component={Boundary} />
            <Route path="/direct:id" Component={DirectGHG} />
            <Route path="/indirect" Component={IndirectGHG} />
            <Route path="/report" Component={Report} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
