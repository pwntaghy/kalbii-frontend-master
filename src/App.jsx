import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Allroutes from './components/Allroutes'
import MainLayout from './layouts/MainLayouts'
import AuthLayout from './layouts/AuthLayout'

function App() {
  const location = useLocation();

  // Define auth routes that should not show header
  const authRoutes = ['/login', '/signup', '/forgot-password', '/update-password', '/verify-otp'];
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <div>
      {isAuthRoute ? (
        <AuthLayout>
          <Allroutes />
        </AuthLayout>
      ) : (
        <MainLayout>
          <Allroutes />
        </MainLayout>
      )}
    </div>
  )
}
export default App
