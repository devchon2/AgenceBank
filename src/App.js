
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Login" element={<Login/>} /> */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default App;
