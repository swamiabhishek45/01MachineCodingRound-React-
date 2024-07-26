import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import OTPForm from "./pages/OTPForm";
import DDCards from "./pages/DDCards";
import DataTable from "./pages/DataTable";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/otp-form" />} />
                    <Route path="/otp-form" exact element={<OTPForm />} />
                    <Route path="/course-list" element={<DDCards />} />
                    <Route path="/batches" element={<DataTable />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
