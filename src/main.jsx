import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'
import { NewDataProvider } from './context/NewDataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'; 
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top';



// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <NewDataProvider>
        <CartProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
                <App />
                <ScrollToTop color="white" smooth style={{backgroundColor:'#F1C40F',display:'flex',alignItems:'center',justifyContent:'center'}}/>
                <ToastContainer/>
          </ClerkProvider>
        </CartProvider>
      </NewDataProvider>
    </DataProvider> 
  </StrictMode>,
)
