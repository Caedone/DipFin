import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { searchCompanies } from './api'

console.log('About to call searchCompanies');
searchCompanies("tsla").then(result => console.log('Final result:', result)).catch(error => console.error('Error:', error));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
