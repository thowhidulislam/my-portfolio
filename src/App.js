import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className='bg-secondary'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
