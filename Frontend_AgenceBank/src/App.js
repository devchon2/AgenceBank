
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/PublicRoutes/LoginPage/LoginPage.jsx';
import Home from './pages/PublicRoutes/HomePage/HomePage.jsx';
import UserPage from './pages/PrivateRoutes/UserPage/UserPage.jsx';
import ProfilPage from './pages/PrivateRoutes/ProfilePage/ProfilePage.jsx';
import PublicLayout from './pages/PublicRoutes/PublicLayout/PublicLayout.jsx';
import PrivateLayout from './pages/PrivateRoutes/PrivateLayout/PrivateLayout.jsx';
import ErrorPage from './pages/PublicRoutes/ErrorPage/ErrorPage.jsx';
import  store  from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
   <Provider store={store}>
    <Routes>
      <Route element={<PublicLayout />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Route>
      


        <Route path="/" element={<PrivateLayout />} >
          <Route path="/user" element={<UserPage />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
           
    </Routes>
  </Provider>
  )
};

export default App; 
