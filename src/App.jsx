import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heart from './components/Heart/Heart';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Shop from './components/Shop/Shop';
import Main from './pages/Main';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/heart' element={<Heart/>}/>
<Route path='/settings' element={<Settings/>}/>

      </Routes>
    </div>
  );
}

export default App;
