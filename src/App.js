import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Designer from "./components/Designer";
import Manager from "./components/Manager";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/frontend" className="link">
          Frontend
        </Link>
        <Link to="/backend" className="link">
          Backend
        </Link>
        <Link to="/designer" className="link">
          Designer
        </Link>
        <Link to="/manager" className="link">
          Manager
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1>Добро пожаловать!</h1>
              <p>Выберите раздел в навигации.</p>
            </motion.div>
          }
        />

        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </div>
  );
};

export default App;
