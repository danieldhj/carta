import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pagina2 from "./pagina2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes >
              <Route path="/carta" element={<App />}/>
              <Route path="/pagina2" element={<Pagina2/>}/>
            </Routes>
      </BrowserRouter>
  </StrictMode>,
)
