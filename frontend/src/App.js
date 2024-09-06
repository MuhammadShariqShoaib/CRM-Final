import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginSignup/LoginPage';
import RouteSidebar from './View/RouteSidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<RouteSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
