import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import {Routes,BrowserRouter,Route,Link} from 'react-router-dom'
import Login from './Login'
import Members from './Members'


function App() {
  return (
    <div className="App">
     
      
      <BrowserRouter>
      <div className="container">
      <div>
        <h1 className="heading">My app</h1>
      </div>
      <div className="nav">
      <Link to='/register' className="link">Register</Link>
      <Link to='/login' className="link">Login</Link>
      <Link to="/members" className="link">Members</Link>
      </div>
      </div>
       <Routes>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/members" element={<Members/>}></Route>
      </Routes>
      
      </BrowserRouter>
      </div>
  );
}

export default App;
