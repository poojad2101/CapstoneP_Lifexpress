import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import Login from '../login/Login';
import Register from '../register/Register';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Topbar from '../../components/topbar/Topbar';
import Write from '../../pages/write/Write';
import Single from '../single/Single';
import Settings from '../settings/Settings';

export default function App() {
  console.log('in app');
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <Topbar user={user} setUser={setUser} />
      {user ? (
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/write" element={<Write user={user} />} />
            <Route path="/single/:postId" element={<Single user={user} />} />
          </Routes>
        </>
      ) : (
        // <AuthPage setUser={setUser}/>
    
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/settings" element={<Settings setUser={setUser} />} />
        </Routes>
      
      )}
    </main>
  );
}
