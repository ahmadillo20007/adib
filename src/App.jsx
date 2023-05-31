import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}>
          <Route path='' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Route>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
