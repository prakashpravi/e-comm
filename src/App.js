import React from 'react';
import AppTheme from './App.theme';
import RouterApp from './router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  return (
    <AppTheme >
      <RouterApp />
    </AppTheme>
  );
}

export default App;