import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
