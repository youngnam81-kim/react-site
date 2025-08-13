import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bpp from './Bpp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Bpp></Bpp>
    {/* <Header></Header>
    <Lside></Lside>
    <Center></Center>
    <Rside></Rside>
    <Botside></Botside>
    <App />
     */}
  </StrictMode>,
)
