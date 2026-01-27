<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
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
>>>>>>> 842fd4a1723d3116580c9f4dc09e238de7f7523e
