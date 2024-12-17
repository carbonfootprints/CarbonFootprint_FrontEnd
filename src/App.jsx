import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CalculateHome from "./pages/CalculateHome";
import ProductionSystem from "./components/ProductionSystem";
import Boundary from "./components/Boundary";
import DirectGHG from "./components/DirectGHG";
import IndirectGHG from "./components/IndirectGHG";
import Report from "./components/Report";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/calci" Component={CalculateHome} />
          <Route path="/production" Component={ProductionSystem} />
          <Route path="/boundary" Component={Boundary} />
          <Route path="/direct" Component={DirectGHG} />
          <Route path="/indirect" Component={IndirectGHG} />
          <Route path="/report" Component={Report} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
