import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ProfilePage from './pages/PrivateRoutes/ProfilePage/ProfilePage.jsx';
import AccountPage from './pages/PrivateRoutes/AccountPage/AccountPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import PrivateRoutes from './pages/PrivateRoutes/PrivatesRoutes.jsx';

function App() {
  return (
    <Routes>
      {/* Define the main layout for all routes */}
      <Route path="/" element={<Layout />} >
        {/* Define the default route for the root path */}
        <Route index element={<HomePage />} />
        {/* Define the login route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Define private routes, which require authentication */}
        <Route element={<PrivateRoutes />} >
          {/* Define the profile route */}
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Define the account route with a dynamic parameter 'id' */}
          <Route path="/account/:id" element={<AccountPage />} />
        </Route>
        
        {/* Define the route for any other paths */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
