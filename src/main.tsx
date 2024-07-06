import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PatientsProvider } from './context/PatientsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </React.StrictMode>,
)
