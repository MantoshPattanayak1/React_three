import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Alerts from './pages/Alerts.jsx';
import Live from './pages/Live.jsx';
import Logs from './pages/Logs.jsx';
import Maintain from './pages/Maintain.jsx';
import Search from './pages/Search.jsx';
import Zone from './pages/Zone.jsx';
import LogOut from './pages/LogOut.jsx';

const App = () => {
  return (
    <div className='whole'>

    <div className='total'>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Live" element={<Live />} />
          <Route path="/Logs" element={<Logs/>} />
          <Route path="/Maintain" element={<Maintain />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Zone" element={<Zone/>} />
          <Route path="/LogOut" element={<LogOut/>}/>
        </Routes>
      </Sidebar>
    {/* <Nav>
    <Routes>
    <Route path="/Crowd" element={<Crowd />} />
          <Route path="/Fire" element={<Dashboard />} />
          <Route path="/Wrong" element={<Alerts />} />
          <Route path="/AirAlerts" element={<Live />} />
          <Route path="/WaterAlerts" element={<Logs/>} />
     </Routes>
    </Nav> */}
    </BrowserRouter>
    </div>
    </div>
  );
};

export default App;