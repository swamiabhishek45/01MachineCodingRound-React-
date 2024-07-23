import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OTPForm from "./pages/OTPForm";
import DDCards from "./pages/DDCards";
import DataTable from "./pages/DataTable";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<OTPForm />} />
                    <Route path="/about" element={<DDCards />} />
                    <Route path="/contact" element={<DataTable />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
