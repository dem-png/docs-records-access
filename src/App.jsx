import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import Masterlist from "./pages/masterlist.jsx";
import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* default */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documents" element={<Masterlist />} />

      {/* optional: if you don't have this page yet, remove the button in dashboard */}
      {/* <Route path="/request-document" element={<RequestDocument />} /> */}
    </Routes>
  );
}
