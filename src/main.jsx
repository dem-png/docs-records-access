import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DocumentRequestForm from './pages/docReqForm.jsx'  // ✅ Fixed: ./ instead of ../ and correct filename

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DocumentRequestForm />
  </StrictMode>,
)