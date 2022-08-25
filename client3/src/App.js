import './App.css';
import {useState} from 'react'
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
// import FoundInfo from './Information';

function App() {



const [metric,setMetric] = useState([])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchOption  />} />
        <Route path="/home" element={<Home setMetric={setMetric}/>} />
        <Route path="/new-form" element={<NewForm metric={metric}/>} />
        <Route path="/public" element={<PublicCorner />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="information/:UID" element={<Information />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
