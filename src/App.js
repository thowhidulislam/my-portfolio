import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/Home/AboutMe';
import Home from './components/Home/Home/Home';
import CarpentryzDetails from './components/ProjectDetails/CarpentryzDetails';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className='bg-secondary'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/#aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='carpentryzDetails' element={<CarpentryzDetails></CarpentryzDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
