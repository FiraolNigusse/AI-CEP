import { useState } from 'react';
import { 
  LayoutDashboard, 
  Send, 
  History, 
  CreditCard, 
  Settings as SettingsIcon, 
  LogOut, 
  Menu, 
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardOverview from '../components/DashboardOverview';
import EmailGenerator from '../components/EmailGenerator';
import Billing from '../components/Billing';
import Settings from '../components/Settings';
import { cn } from '../utils/cn';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'generator', label: 'Email Generator', icon: Send },
    { id: 'history', label: 'Past Sequences', icon: History },
    { id: 'credits', label: 'Billing/Credits', icon: CreditCard },
    { id: 'settings', label: 'Account Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-400 transition-colors duration-500 overflow-hidden">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* --- MOBILE NAVIGATION --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] glass px-6 py-4 rounded-3xl border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between shadow-2xl">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "p-2 rounded-xl transition-all",
              activeTab === item.id ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400" : "text-slate-400"
            )}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </div>

      <div className="flex relative z-10 h-screen overflow-hidden">
        
        {/* --- SIDEBAR --- */}
        <motion.aside 
          initial={false}
          animate={{ width: isSidebarOpen ? 280 : 80 }}
          className={cn(
            "hidden lg:flex flex-col border-r border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl transition-all duration-300 h-full sticky top-0 left-0",
            !isSidebarOpen && "items-center"
          )}
        >
          <div className="p-8 flex items-center justify-between">
            {isSidebarOpen ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AI-CEP</span>
              </div>
            ) : (
                <Sparkles className="w-6 h-6 text-indigo-600" />
            )}
          </div>

          <nav className="flex-grow px-4 space-y-2 py-4">
             {menuItems.map((item) => (
               <button 
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className={cn(
                   "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-medium text-sm group",
                   activeTab === item.id 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                 )}
               >
                 <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-white" : "text-slate-400 group-hover:text-indigo-500")} />
                 {isSidebarOpen && <span>{item.label}</span>}
                 {isSidebarOpen && activeTab === item.id && (
                   <motion.div layoutId="active-pill" className="ml-auto w-1 h-4 bg-white/40 rounded-full" />
                 )}
               </button>
             ))}
          </nav>

          <div className="p-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto">
             <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 transition-all font-medium text-sm group">
               <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
               {isSidebarOpen && <span>Sign Out</span>}
             </button>
          </div>
        </motion.aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-grow overflow-auto scroll-smooth h-full">
           <header className="sticky top-0 z-40 w-full px-8 py-4 flex items-center justify-between border-b border-white/40 dark:border-slate-900/40 bg-white/20 dark:bg-slate-950/20 backdrop-blur-md">
             <button 
               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
               className="hidden lg:flex p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-all"
             >
               <Menu className="w-5 h-5" />
             </button>

             <div className="flex items-center gap-4">
                <div className="flex flex-col items-end px-2">
                   <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Founder Demo</span>
                   <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Premium Access</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-xl shadow-indigo-600/20 flex items-center justify-center p-0.5">
                   <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-950 flex items-center justify-center">
                     <span className="text-xs font-black text-indigo-600">FD</span>
                   </div>
                </div>
             </div>
           </header>

           <div className="p-8 md:p-12 pb-32">
             <AnimatePresence mode="wait">
               {activeTab === 'overview' && (
                 <motion.div
                   key="overview"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.2 }}
                 >
                   <DashboardOverview onNavigate={setActiveTab} />
                 </motion.div>
               )}

               {activeTab === 'generator' && (
                 <motion.div
                   key="generator"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.2 }}
                 >
                   <EmailGenerator />
                 </motion.div>
               )}

               {activeTab === 'credits' && (
                 <motion.div
                   key="credits"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Billing />
                 </motion.div>
               )}

               {activeTab === 'settings' && (
                 <motion.div
                   key="settings"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Settings />
                 </motion.div>
               )}

               {activeTab !== 'generator' && activeTab !== 'overview' && activeTab !== 'credits' && activeTab !== 'settings' && (
                 <motion.div
                   key="placeholder"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="h-[60vh] flex flex-col items-center justify-center text-center p-12 glass rounded-[40px] border-slate-200/50 dark:border-slate-800/50"
                 >
                   <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6">
                     <LayoutDashboard className="w-8 h-8 text-slate-300" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{menuItems.find(m => m.id === activeTab)?.label}</h3>
                   <p className="text-slate-500 dark:text-slate-400 max-w-xs">This section is currently under development. Stay tuned for updates!</p>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
