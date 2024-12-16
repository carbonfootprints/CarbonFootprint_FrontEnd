import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CalculateHome from "./pages/CalculateHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/calci" Component={CalculateHome} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
