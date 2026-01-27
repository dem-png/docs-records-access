import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import DocumentRequestForm from "./pages/docReqForm";

function App() {
  return (
    <Routes>
      {/* Redirect root "/" to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Main Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/request-document" element={<DocumentRequestForm />} />

      {/* Catch-all for unmatched URLs */}
      <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
