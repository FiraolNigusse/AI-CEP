import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../api/axios';
import { cn } from '../utils/cn';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync state if user navigates using back/forward buttons
  useEffect(() => {
    setIsLogin(location.pathname === '/login');
    setError(null);
  }, [location.pathname]);

  const validateForm = () => {
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (!isLogin && !formData.name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    return true;
  };

  const handleToggle = (loginMode: boolean) => {
    setIsLogin(loginMode);
    setError(null);
    navigate(loginMode ? '/login' : '/register', { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);

    try {
      if (isLogin) {
        // Assume standard TokenObtainPairView at /users/token/
        const res = await api.post('/users/token/', {
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        navigate('/dashboard');
      } else {
        // Assume Custom User Registration view at /users/register/
        await api.post('/users/register/', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        // Auto-login after registration
        const res = await api.post('/users/token/', {
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        navigate('/dashboard');
      }
    } catch (err: any) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else if (err.response?.data?.email) {
        setError(err.response.data.email[0]);
      } else if (err.response?.data?.password) {
        setError(err.response.data.password[0]);
      } else {
        setError("An error occurred. Please check your credentials and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center px-4 py-12 relative overflow-hidden transition-colors duration-500 font-sans">
      
      {/* Background Decorators */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-[600px] opacity-20 dark:opacity-10 blur-[120px] pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">AI-CEP</span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            {isLogin ? "Enter your details to access your dashboard." : "Start generating personalized emails today."}
          </p>
        </div>

        <motion.div 
          layout
          className="glass rounded-[32px] border-slate-200/50 dark:border-slate-800/50 p-8 shadow-2xl"
        >
          {/* Toggle Login/Register */}
          <div className="flex p-1 mb-8 bg-slate-100 dark:bg-slate-900 rounded-2xl relative">
            <button 
              onClick={() => handleToggle(false)}
              className={cn("flex-1 py-2.5 text-sm font-bold z-10 transition-colors", !isLogin ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
            >
              Register
            </button>
            <button 
              onClick={() => handleToggle(true)}
              className={cn("flex-1 py-2.5 text-sm font-bold z-10 transition-colors", isLogin ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
            >
              Login
            </button>
            <motion.div 
              layoutId="auth-slider"
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-slate-800 rounded-xl shadow-sm z-0"
              initial={false}
              animate={{ left: isLogin ? 'calc(50% + 2px)' : '4px' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <AnimatePresence mode="popLayout">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-start gap-3 text-red-600 dark:text-red-400 text-sm"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="font-medium leading-relaxed">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Password</label>
                {isLogin && <a href="#" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Forgot?</a>}
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 mt-4 rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/20 group",
                isLoading ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
              )}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-slate-300 border-t-slate-500 rounded-full animate-spin" />
                  Please wait...
                </span>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
        
        <p className="text-center text-xs text-slate-500 mt-8">
          By continuing, you agree to our <a href="#" className="underline hover:text-slate-800 dark:hover:text-slate-300">Terms of Service</a> and <a href="#" className="underline hover:text-slate-800 dark:hover:text-slate-300">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Auth;
