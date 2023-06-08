import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heart from './components/Heart/Heart';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Shop from './components/Shop/Shop';
import Main from './pages/Main';
import Settings from './components/Settings/Settings';
import Clothes from './components/Clothes/Clothes';
import Shoes from './components/Shoes/Shoes';
import Accessories from './components/Accessories/Accessories';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/heart' element={<Heart/>}/>
<Route path='/settings' element={<Settings/>}/>
<Route path='/clothes' element={<Clothes/>}/>
<Route path='/shoes' element={<Shoes/>}/>
<Route path='/accessories' element={<Accessories/>}/>
<Route path='/main' element={<Main/>}/>
<Route path='/header' element={<Header/>}/>

      </Routes>
    </div>
  );
}

export default App;
