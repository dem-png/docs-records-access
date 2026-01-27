import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import DocumentRequestForm from "./pages/docReqForm";

function App() {
  return (
    <Routes>
      {/* Redirect root "/" to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Main Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documents" element={<Dashboard />} />
      <Route path="/request-document" element={<DocumentRequestForm />} />

      {/* Catch-all for unmatched URLs */}
      <Route path="*" element={
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-900">404</h1>
            <p className="mt-2 text-gray-600">Page Not Found</p>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;