import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/Home/AboutMe';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className='bg-secondary'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/#aboutMe' element={<AboutMe></AboutMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
