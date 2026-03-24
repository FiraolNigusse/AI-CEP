import { useState } from 'react';
import { User, Lock, Bell, Moon, Sun, Shield, Loader2, Save } from 'lucide-react';
import { cn } from '../utils/cn';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Profile Form
  const [profileData, setProfileData] = useState({
    name: 'Founder',
    email: 'founder@example.com',
    company: 'Acme Corp'
  });

  // Security Form
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSuccess("Profile updated successfully.");
      setIsLoading(false);
      setTimeout(() => setSuccess(null), 3000);
    }, 1000);
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSuccess("Password changed successfully.");
      setIsLoading(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSuccess(null), 3000);
    }, 1000);
  };

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setIsDarkMode(isDark);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Settings Navigation */}
        <div className="w-full md:w-64 glass p-4 rounded-[24px] border-slate-200/60 dark:border-slate-800/60 shrink-0 sticky top-24">
           <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-4 pt-2">Account Settings</h3>
           <nav className="space-y-1">
             <button 
               onClick={() => setActiveTab('profile')}
               className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left", 
                 activeTab === 'profile' ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
               )}
             >
               <User className="w-4 h-4" /> Profile Information
             </button>
             <button 
               onClick={() => setActiveTab('security')}
               className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left", 
                 activeTab === 'security' ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
               )}
             >
               <Lock className="w-4 h-4" /> Security & Password
             </button>
             <button 
               onClick={() => setActiveTab('preferences')}
               className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left", 
                 activeTab === 'preferences' ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
               )}
             >
               <Bell className="w-4 h-4" /> Preferences
             </button>
           </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-grow w-full glass p-8 rounded-[32px] border-slate-200/60 dark:border-slate-800/60 min-h-[500px]">
          
          {success && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-3 text-emerald-600 dark:text-emerald-400 text-sm animate-in fade-in slide-in-from-top-2">
              <Shield className="w-5 h-5" /> {success}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Profile Information</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Update your account details and public information.</p>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-5 max-w-lg">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Company</label>
                  <input 
                    type="text" 
                    value={profileData.company}
                    onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                  <button 
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Security & Password</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Maintain account security by regularly updating your password.</p>
              </div>

              <form onSubmit={handlePasswordUpdate} className="space-y-5 max-w-lg">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Password</label>
                  <input 
                    type="password" 
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">New Password</label>
                  <input 
                    type="password" 
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Confirm New Password</label>
                  <input 
                    type="password" 
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white text-sm transition-all"
                  />
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                  <button 
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Preferences</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Manage the look and feel of your workspace.</p>
              </div>

              <div className="max-w-lg space-y-6">
                 <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                         {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900 dark:text-white">Dark Mode</h4>
                         <p className="text-xs text-slate-500">Toggle dark appearance.</p>
                       </div>
                    </div>
                    <button 
                      onClick={toggleDarkMode}
                      className={cn(
                        "w-12 h-6 rounded-full transition-colors relative", 
                        isDarkMode ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                      )}
                    >
                      <div className={cn(
                        "w-4 h-4 bg-white rounded-full absolute top-1 transition-transform",
                        isDarkMode ? "translate-x-7" : "translate-x-1"
                      )} />
                    </button>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
