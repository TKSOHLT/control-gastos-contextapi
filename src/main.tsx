import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BudgetProvider } from './context/BudgetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* De este modo utilizamos el wrapper del context hacia toda la app */}
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>,
)
