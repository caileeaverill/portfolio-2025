import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from "./App";
import Home from "./pages/Home";
import HireMe from "./pages/HireMe";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/hireme" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
