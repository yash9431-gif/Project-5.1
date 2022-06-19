import Navbar from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RequireAuth from './hoc/RequireAuth';
import Feeds from './pages/Feeds';
import Posts from './pages/Posts';
import { Signup } from './pages/Signup';

function App() {
  
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='./signup' element={<Signup/>}/>
        <Route path='/feeds' element={<RequireAuth><Feeds /></RequireAuth>} />
         <Route path='/posts' element={<RequireAuth><Posts/></RequireAuth>} />
      </Routes>
    
    </div>
  );
}

export default App;
