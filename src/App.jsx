import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
