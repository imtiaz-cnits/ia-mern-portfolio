import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useAuthStore } from "./store/authStore";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import LoadingSpinner from "./skeleton/LoadingSpinner.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

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
    const { checkAuth, isCheckingAuth } = useAuthStore();
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isCheckingAuth) return <LoadingSpinner />;
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                } />
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

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
    );
};

export default App;