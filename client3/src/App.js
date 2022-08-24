import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Information from './Information';
import Dashboard from './Dashboard';
import Login from './Login';
import SearchOption from './SearchOption';
import Home from './Home';
import SignUp from './Signup';
import NewForm from './NewForm';
import ContactUs from './ContactUs';
import PublicCorner from './PublicCorner';
import { useEffect } from 'react';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchOption />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-form" element={<NewForm />} />
        <Route path="/public" element={<PublicCorner />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
