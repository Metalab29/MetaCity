import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import App from './App.tsx';
import DApp from './pages/DApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dapp" element={<DApp />} />
        </Routes>
      </Router>
    </WalletProvider>
  </StrictMode>
);