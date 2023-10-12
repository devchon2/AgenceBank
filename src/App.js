
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default App;
