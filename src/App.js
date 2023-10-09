
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Login" element={<Login/>} /> */}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App;
