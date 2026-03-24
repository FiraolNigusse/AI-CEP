import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, AlertCircle, ShieldCheck } from 'lucide-react';
import api from '../api/axios';
import { cn } from '../utils/cn';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out the AI generator.',
    credits: 3,
    amount: 0, // 0 signifies free plan
    features: [
      '3 AI Generations included',
      'Basic Personalization',
      'Standard Support'
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$5',
    description: 'Great for founders running small campaigns.',
    credits: 50,
    amount: 5,
    popular: true,
    features: [
      '50 AI Generations included',
      'Full LinkedIn Research Integration',
      'Priority Email Support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$10',
    description: 'For teams scaling their cold outreach.',
    credits: 120,
    amount: 10,
    features: [
      '120 AI Generations included',
      'Deep AI Personalization Engine',
      '24/7 Dedicated Support',
      'Early Access to Features'
    ]
  }
];

const Billing = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubscribe = async (planId: string, amount: number) => {
    if (amount === 0) {
      setSuccess("You are already on the Free plan!");
      setTimeout(() => setSuccess(null), 3000);
      return;
    }

    setIsLoading(planId);
    setError(null);
    setSuccess(null);

    try {
      const res = await api.post('/billing/buy-credits/', {
        amount: amount
      });
      
      if (res.data && res.data.url) {
        // Redirect to Stripe checkout
        window.location.href = res.data.url;
      } else {
        setSuccess("Plan selected successfully. (Checkout URL not provided by server in demo mode)");
        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to initiate checkout. Please try again.");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
          <ShieldCheck className="w-4 h-4" />
          Secure Checkout
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Supercharge your cold outreach. Buy exactly what you need, with no hidden fees or subscriptions.
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 p-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-start gap-3 text-red-600 dark:text-red-400 text-sm max-w-2xl mx-auto"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="font-medium leading-relaxed">{error}</p>
          </motion.div>
        )}
        
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-start gap-3 text-emerald-600 dark:text-emerald-400 text-sm max-w-2xl mx-auto"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="font-medium leading-relaxed">{success}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={cn(
              "relative glass p-8 rounded-[36px] border-slate-200/50 dark:border-slate-800/50 flex flex-col transition-transform hover:-translate-y-1",
              plan.popular ? "shadow-2xl shadow-indigo-600/20 ring-2 ring-indigo-500" : ""
            )}
          >
            {plan.popular && (
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                 <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                 {plan.amount > 0 && <span className="text-slate-500 font-medium">/ one-time</span>}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[40px]">
                {plan.description}
              </p>
            </div>

            <div className="flex items-center gap-2 py-3 px-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl mb-8 border border-slate-100 dark:border-slate-800/50">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{plan.credits} Credits</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
               {plan.features.map((feature, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                   <span className="leading-snug">{feature}</span>
                 </li>
               ))}
            </ul>

            <button 
              onClick={() => handleSubscribe(plan.id, plan.amount)}
              disabled={isLoading !== null}
              className={cn(
                "w-full py-4 text-center rounded-2xl font-bold transition-all active:scale-[0.98] mt-auto",
                plan.popular 
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-600/30" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {isLoading === plan.id ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                plan.amount === 0 ? "Current Plan" : "Buy Now"
              )}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Billing;
