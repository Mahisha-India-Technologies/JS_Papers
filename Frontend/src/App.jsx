import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './AppLayout/AppLayout';
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider>
      <AppLayout />
    </HelmetProvider>
  )
}

export default App;
