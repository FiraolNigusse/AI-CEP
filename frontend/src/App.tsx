import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Dashboard from './pages/Dashboard';

// Placeholder Auth for structure
const AuthPage = () => <div className="p-20 text-center">Auth (Login/Register) - Next step</div>;


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
