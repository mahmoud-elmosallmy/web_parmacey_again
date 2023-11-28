import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsContext from './Context/DoctorsContext';
import DoctorsFilterContext from './Context/DoctorsFilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DoctorsContext>
      <DoctorsFilterContext>
        <App />
      </DoctorsFilterContext>
    </DoctorsContext>

);
