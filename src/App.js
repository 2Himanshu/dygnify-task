import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bussiness from "./components/Bussiness";
import Loan from "./components/Loan";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
