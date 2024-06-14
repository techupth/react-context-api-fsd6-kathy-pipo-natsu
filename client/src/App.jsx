import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext } from "react";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

export const productContext = createContext({});
function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };
  return (
    <div className="App">
      <productContext.Provider
        value={{
          userData,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </productContext.Provider>
    </div>
  );
}

export default App;
