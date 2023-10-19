
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/PublicRoutes/LoginPage/LoginPage.jsx';
import Home from './pages/PublicRoutes/HomePage/HomePage.jsx';
import UserPage from './pages/PrivateRoutes/UserPage/UserPage.jsx';
import PublicLayout from './pages/PublicRoutes/PublicLayout/PublicLayout.jsx';
import PrivateLayout from './pages/PrivateRoutes/PrivateLayout/PrivateLayout.jsx';
import ErrorPage from './pages/PublicRoutes/ErrorPage/ErrorPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage  />} />
      </Route>
      <Route element={<PrivateLayout />} >
        <Route path="/user" element={<UserPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )};

export default App; 
