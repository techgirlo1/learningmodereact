
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <AppRouter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
