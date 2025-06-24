import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/authContext';
import { BrowserRouter } from 'react-router-dom';  // <-- Import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>          {/* Wrap with BrowserRouter */}
      <AuthProvider>         {/* AuthProvider inside Router */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
