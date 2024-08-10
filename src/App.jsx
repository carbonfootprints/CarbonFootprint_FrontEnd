import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
