import { motion } from 'framer-motion';
import { Plus, Mail, Clock, ArrowRight, Zap, Building2, UserCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

interface DashboardOverviewProps {
  onNavigate: (tab: string) => void;
}

const recentGenerations = [
  {
    id: 1,
    company: "Stripe",
    role: "Sales Director",
    subject: "Quick question about Stripe's scaling strategy",
    date: "2 hours ago",
    status: "Generated"
  },
  {
    id: 2,
    company: "Vercel",
    role: "Engineering Manager",
    subject: "Loved your recent post on edge computing",
    date: "1 day ago",
    status: "Sent"
  },
  {
    id: 3,
    company: "Linear",
    role: "Product Lead",
    subject: "Ideas for the new issue tracking workflow",
    date: "3 days ago",
    status: "Viewed"
  }
];

const DashboardOverview = ({ onNavigate }: DashboardOverviewProps) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header & Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass p-8 rounded-[32px] border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-[0.05] pointer-events-none">
            <Zap className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome back, Founder</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
              Your AI assistant is ready. You have 12 credits remaining this billing cycle.
            </p>
            <button 
               onClick={() => onNavigate('generator')}
               className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
               <Plus className="w-5 h-5" />
               Generate New Sequence
            </button>
          </div>
        </div>

        <div className="glass p-8 rounded-[32px] border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Credits</h3>
            </div>
            <div className="text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
              12<span className="text-lg text-slate-400 font-medium tracking-normal"> / 100</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Resets in 14 days</p>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full mt-6 overflow-hidden">
             <div className="bg-indigo-600 h-full rounded-full" style={{ width: '12%' }} />
          </div>
        </div>
      </div>

      {/* Recent Generations */}
      <div>
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
             <Clock className="w-5 h-5 text-indigo-500" />
             Recent Generations
           </h3>
           <button 
             onClick={() => onNavigate('history')}
             className="text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors flex items-center gap-1"
           >
             View All <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid gap-4">
          {recentGenerations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-5 rounded-[24px] border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="flex items-center gap-4 md:w-1/4 shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                  <Building2 className="w-6 h-6 text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{item.company}</h4>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-1">
                    <UserCircle2 className="w-3 h-3" /> {item.role}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 line-clamp-1">{item.subject}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/4 shrink-0">
                <span className="text-xs font-medium text-slate-400">{item.date}</span>
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                  item.status === 'Sent' ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" :
                  item.status === 'Viewed' ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                  "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                )}>
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DashboardOverview;
