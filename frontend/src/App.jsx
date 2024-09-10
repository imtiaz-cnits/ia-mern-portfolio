import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {Navigate, Route, Routes} from "react-router-dom";
import BlogCategoryPage from "./pages/Dashboard/BlogCategoryCreatePage.jsx";
import ClientCreatePage from "./pages/Dashboard/ClientCreatePage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import PortfolioCategoryCreatePage from "./pages/Dashboard/PortfolioCategoryCreatePage.jsx";
import PortfolioCreatePage from "./pages/Dashboard/PortfolioCreatePage.jsx";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoadingSpinner from "./skeleton/LoadingSpinner.jsx";
import { useAuthStore } from "./store/authStore";
import BlogCreatePage from "./pages/Dashboard/BlogCreatePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { useLocation } from 'react-router-dom';

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

// Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
    const location = useLocation();

  const { checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
      const handleScrollAndAuthCheck = async () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });

          await checkAuth();
      };

      handleScrollAndAuthCheck();
  }, [checkAuth, location.pathname]);

  if (isCheckingAuth) return <LoadingSpinner />;
  return (
    <>
      <Routes>
        {/* Client Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-client"
          element={
            <ProtectedRoute>
              <ClientCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-portfolio-category"
          element={
            <ProtectedRoute>
              <PortfolioCategoryCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-portfolio"
          element={
            <ProtectedRoute>
              <PortfolioCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-blog-category"
          element={
            <ProtectedRoute>
              <BlogCategoryPage />
            </ProtectedRoute>
          }
        />
          <Route
              path="/dashboard-blog"
              element={
                  <ProtectedRoute>
                      <BlogCreatePage />
                  </ProtectedRoute>
              }
          />

        {/* User Routes */}
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* Notfound Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster position="bottom right" />
    </>
  );
};

export default App;
