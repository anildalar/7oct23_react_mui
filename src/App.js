//1. Import Area
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

//2. Defination area
function App(props) {
  console.log(props.mycolor);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={ <Home mycolor2={props.mycolor } /> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/blog" element={ <Blog /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//3. Export area
//3.1 Default Export
export default App;

//3.2
