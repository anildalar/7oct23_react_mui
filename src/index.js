//1. Import Area
import './index.css';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App';

function anil(){
  return 'orange';
}

let clr = anil();
export const ThemeProvider2 = createContext();
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Replace this with your desired primary color
    },
    // You can also customize secondary and other palette colors here
  },
})

let clr3 = '#0000FF';


//2. Define Area
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThemeProvider  theme={customTheme}>
      <ThemeProvider2.Provider value={clr3}>
        <App mycolor={clr} />
      </ThemeProvider2.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

//3. Export Area
