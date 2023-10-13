
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/PublicRoutes/LoginPage/LoginPage.jsx';
import Home from './pages/PublicRoutes/HomePage/HomePage.jsx';
import UserPage from './pages/UserPage/UserPage.jsx';
import PublicLayout from './pages/PublicRoutes/PublicLayout/PublicLayout.jsx';
import ErrorPage from './pages/PublicRoutes/ErrorPage/ErrorPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    
      <Route path="/user" element={<UserPage />} />
    </Routes>

  )
}

export default App;
