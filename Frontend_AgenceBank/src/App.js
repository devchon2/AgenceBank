
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ProfilePage from './pages/PrivateRoutes/ProfilePage/ProfilePage.jsx';
import AccountPage from './pages/PrivateRoutes/AccountPage/AccountPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import PrivateRoutes from './pages/PrivateRoutes/PrivatesRoutes.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store'


function App() {
  return (
  <Provider store={store}>
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoutes />} >
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account/:id" element={<AccountPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
    </Routes>
    
  </Provider>
   )
}

export default App; 
