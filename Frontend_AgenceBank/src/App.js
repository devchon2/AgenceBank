
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/PublicRoutes/LoginPage/LoginPage.jsx';
import Home from './pages/PublicRoutes/HomePage/HomePage.jsx';
import ProfilePage from './pages/PrivateRoutes/ProfilePage/ProfilePage.jsx';
import AccountPage from './pages/PrivateRoutes/AccountPage/AccountPage.jsx';
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account/:id" element={<AccountPage  />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
           
    </Routes>
  </Provider>
  )
};

export default App; 
