import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./views/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
