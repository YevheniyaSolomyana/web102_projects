import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout'
import NotFound from './routes/NotFound'
import DetailView from './routes/DetailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/BreweryDetails/:id" element={<DetailView />} />
        <Route path="*" element={<NotFound /> } />
      </Route>
    </Routes>
  </BrowserRouter>
)
