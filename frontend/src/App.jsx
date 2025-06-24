import './style.css';

import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // Remove BrowserRouter here

import { AuthContext } from './context/authContext'; 
import Sidebar from './admin/Sidebar';
import Topbar from './admin/Topbar';

import Homepage from './pages/Homepage';
import Aerospace from './pages/Aerospace';
import Market from './pages/Market';
import NewsComponent from './pages/News';
import Products from './pages/Products';
import Subproducts from './pages/subproducts';
import Quality from './pages/Quality';
import CookieConsent from './components/cookie_consent';
import LanguageSelector from './components/language_Selector';
import Contact from './pages/Contact';
import About from './pages/About';
import Events from './pages/Events';
import Career from './pages/Careers';
import Research from './pages/Research';
import MarketPage from './components/marketPage';
import AddMarketPage from './components/addMarket';
import RegisterForm from './pages/Registration';
import LoginForm from './pages/Loginform';
import PerformanceDashboard from './admin/PerformanceDashboard';
import MarketList from './admin/MarketList';
import AddProductForm from './admin/AddProduct';
import ProductPage from './pages/subproducts';
import ProductList from './admin/PoductList';
import AddNewsForm from './admin/AddNews'
import NewsDetail from './pages/newsDetails';
const ProtectedRoute = ({ element, roles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />; 
  }

  return element;
};

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
    <CookieConsent/>
      <LanguageSelector />
      {/* Removed BrowserRouter here */}
      {user && (user.role === 'admin' || user.role === 'editor') && (
        <div className="container-fluid main-container">
          <div className="row">
            <Sidebar />
            <div className="col-md-9 col-lg-10 col-sm-12 content mx-auto">
              <Topbar />
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute
                      element={<PerformanceDashboard />}
                      roles={['admin', 'editor']}
                    />
                  }
                />
                   <Route
                  path="/market-list"
                  element={
                    <ProtectedRoute
                      element={<MarketList />}
                      roles={['admin', 'editor']}
                    />
                  }
                />
                <Route
                  path="/addmarket"
                  element={
                    <ProtectedRoute
                      element={<AddMarketPage />}
                      roles={['admin', 'editor']}
                    />
                  }
                />
                   <Route
                  path="/product-list"
                  element={
                    <ProtectedRoute
                      element={<ProductList />}
                      roles={['admin', 'editor']}
                    />
                  }
                />
                 <Route
                  path="/add-product"
                  element={
                    <ProtectedRoute
                      element={<AddProductForm />}
                      roles={['admin', 'editor']}
                    />
                    

                    
                  }
                />
                   <Route
                  path="/addnews"
                  element={
                    <ProtectedRoute
                      element={<AddNewsForm />}
                      roles={['admin', 'editor']}
                    />
                    

                    
                  }
                />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>
          </div>
        </div>
      )}

      {(!user || (user.role !== 'admin' && user.role !== 'editor')) && (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<NewsComponent />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/products/ceramic-matrix" element={<Subproducts />} />
          <Route path="/company" element={<About />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/quality_testing" element={<Quality />} />
          <Route path="/company/events" element={<Events />} />
          <Route path="/company/careers" element={<Career />} />
          <Route path="/company/research" element={<Research />} />
          <Route path="/market/:slug" element={<MarketPage />} />
           <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/dashboard" element={<Navigate to="/login" />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
