import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Target, ArrowRight, ShieldCheck, MailPlus, Sparkles, 
  CheckCircle2, Moon, Sun
} from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [demoInput, setDemoInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [demoOutput, setDemoOutput] = useState('');

  // Auto-typing for demo
  const sampleOutput = `Subject: Quick question about AI-CEP's growth strategy?

Hi [Name], 

Loved your recent post about personalized cold outreach. 

As a founder scaling AI-CEP, I noticed you're doing some great things in the cold email space. Would love to swap notes on how we're using LLMs to solve the personalization at scale problem...`;

  const handleDemo = () => {
    if (!demoInput) return;
    setIsGenerating(true);
    setDemoOutput('');
    
    // Simulate generation
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDemoOutput(sampleOutput.slice(0, i));
        i++;
        if (i > sampleOutput.length) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 5);
    }, 1000);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-400">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 px-6 py-4 glass mx-auto max-w-6xl mt-4 rounded-full border-slate-200/50 dark:border-slate-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AI-CEP</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#demo" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Demo</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-slate-500"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/login" className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">Login</Link>
            <Link to="/register" className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-24 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-4 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Powered by GPT-4 and custom models
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8"
        >
          Cold outreach that <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">doesn&apos;t feel cold</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-12"
        >
          Personalize your emails at scale. Research leads in seconds and generate sequence strings that actually get replies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/register" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30">
            Start Generating Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#demo" className="px-8 py-4 text-slate-600 dark:text-slate-300 font-semibold hover:text-indigo-600 dark:hover:text-white transition-colors">
            See how it works
          </a>
        </motion.div>

        {/* --- FLOATING BLOBS (Decoration) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-[600px] opacity-20 dark:opacity-[0.15] blur-[120px] pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500 rounded-full" />
        </div>
      </section>

      {/* --- INTERACTIVE DEMO --- */}
      <section id="demo" className="relative z-10 px-6 max-w-5xl mx-auto mb-32">
        <div className="glass rounded-[40px] p-1 border-white/40 dark:border-slate-800/40">
          <div className="bg-white dark:bg-slate-900 rounded-[38px] overflow-hidden p-8 md:p-12 shadow-inner">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Try it yourself</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  Enter your background or a company URL to see the AI transform it into a personalized pitch.
                </p>
                <div className="space-y-4">
                  <div className="relative group">
                    <textarea 
                      value={demoInput}
                      onChange={(e) => setDemoInput(e.target.value)}
                      placeholder="e.g. Sales lead at Stripe, looking for better API monitoring tools..."
                      className="w-full h-40 px-6 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl outline-none focus:ring-2 ring-indigo-500/20 text-slate-950 dark:text-white transition-all placeholder:text-slate-400 group-hover:border-indigo-500/20"
                    />
                  </div>
                  <button 
                    onClick={handleDemo}
                    disabled={isGenerating || !demoInput}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all active:scale-[0.98]",
                      demoInput ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                    )}
                  >
                    {isGenerating ? "Generating Magic..." : (
                      <>
                        Generate Personalization
                        <Zap className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="relative min-h-[400px]">
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 overflow-auto scrollbar-hide">
                  {!demoOutput && !isGenerating && (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                      <MailPlus className="w-12 h-12 mb-4 text-slate-400" />
                      <p className="text-sm">Your generated email will appear here.</p>
                    </div>
                  )}
                  {(demoOutput || isGenerating) && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                       <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400" />
                         <div className="w-3 h-3 rounded-full bg-amber-400" />
                         <div className="w-3 h-3 rounded-full bg-emerald-400" />
                       </div>
                       <pre className="text-sm font-mono text-slate-600 dark:text-slate-400 whitespace-pre-wrap leading-relaxed">
                         {demoOutput}
                         {isGenerating && <span className="animate-pulse inline-block w-1.5 h-4 bg-indigo-500 ml-1 translate-y-0.5" />}
                       </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="relative z-10 px-6 max-w-6xl mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Designed for scale</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Everything you need to automate your top-of-funnel without looking like a robot.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Hyper-Specific Focus",
              desc: "Analyzes company news, LinkedIn updates, and role descriptions for unique triggers."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "3-Step Sequences",
              desc: "Get a subject line, primary pitch, and two strategic follow-ups in a single click."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Spam Guard",
              desc: "AI-powered formatting check ensures your email lands in the inbox, not the junk folder."
            }
          ].map((feature, idx) => (
            <div key={idx} className="group p-8 glass rounded-3xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="relative z-10 px-6 max-w-4xl mx-auto py-20 pb-40">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Simple pricing</h2>
          <p className="text-slate-500 dark:text-slate-400">No hidden fees, no credit cards required to start.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="p-10 rounded-[35px] border border-slate-200 dark:border-slate-800 dark:bg-slate-950/40 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Free</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
               <span className="text-slate-500">/ forever</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 italic">
                 <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                 3 credits included
               </li>
               <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                 <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                 Basic personalization
               </li>
            </ul>
            <Link to="/register" className="w-full py-4 text-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 transition-colors">
              Get Started
            </Link>
          </div>

          <div className="relative p-10 rounded-[35px] bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 shadow-2xl shadow-indigo-600/20 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-bl-2xl">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-4xl font-extrabold">$29</span>
               <span className="opacity-60">/ month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-center gap-3">
                 <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                 100 credits included
               </li>
               <li className="flex items-center gap-3">
                 <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                 Full LinkedIn Research
               </li>
               <li className="flex items-center gap-3">
                 <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                 Priority Generation
               </li>
            </ul>
            <Link to="/register" className="w-full py-4 text-center rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
              Unlock Pro Now
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 md:flex items-center justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold dark:text-white">AI-CEP</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">Building the future of personalized outreach since 2026.</p>
          </div>
          
          <div className="flex flex-wrap gap-12 text-sm text-slate-600 dark:text-slate-400 font-medium">
             <div className="space-y-3">
               <h4 className="font-bold text-slate-900 dark:text-white">Product</h4>
               <a href="#" className="block hover:text-indigo-600">Pricing</a>
               <a href="#" className="block hover:text-indigo-600">Demo</a>
               <a href="#" className="block hover:text-indigo-600">Security</a>
             </div>
             <div className="space-y-3">
               <h4 className="font-bold text-slate-900 dark:text-white">Connect</h4>
               <a href="#" className="flex items-center gap-2 hover:text-indigo-600"><SiX className="w-4 h-4" /> Twitter</a>
               <a href="#" className="flex items-center gap-2 hover:text-indigo-600"><SiGithub className="w-4 h-4" /> Github</a>
             </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-12 text-center text-xs text-slate-400">
          © 2026 AI-CEP. Built for founders by founders.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
