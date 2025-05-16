import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
    <App />
    </SnackbarProvider>
   
  </StrictMode>,
)
