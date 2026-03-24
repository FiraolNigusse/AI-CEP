import { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  RotateCcw, 
  Check, 
  Building2, 
  Briefcase, 
  UserCircle2, 
  FileText,
  Mail,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

interface EmailResult {
  subject: string;
  body: string;
  followUps: string[];
}

const EmailGenerator = () => {
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    background: '',
    jobDescription: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<EmailResult | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult(null);

    // Simulate AI Generation
    setTimeout(() => {
      setResult({
        subject: `Quick question about ${formData.company}'s ${formData.role} growth strategy?`,
        body: `Hi there,\n\nI was researching ${formData.company} and noticed your background in ${formData.background}. \n\nGiven the requirements in your ${formData.role} description, specifically around scaling outreach, I thought my experience might be a great fit for solving your current challenges...`,
        followUps: [
          `Hi [Name], just checking in to see if you had a moment to look at my previous note. Would love to discuss how I can help with the ${formData.role} position.`,
          `Hi [Name], I recently saw ${formData.company} mentioned in a news piece about your expansion. If you're still looking for a ${formData.role}, I'd love to connect.`
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">AI Email Generator</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Transform your research into personal, high-converting outreach.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">12 Credits Remaining</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">
        
        {/* Form Selection */}
        <section className="glass p-6 rounded-[32px] border-slate-200/60 dark:border-slate-800/60 sticky top-24">
          <form onSubmit={handleGenerate} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">Lead Details</label>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <input 
                  type="text"
                  placeholder="Role (e.g. Sales Director)"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white"
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <input 
                  type="text"
                  placeholder="Company Name"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">Context & Research</label>
              
              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <UserCircle2 className="w-4 h-4" />
                </div>
                <textarea 
                  placeholder="Lead Background / Recent Update (e.g. Post on AI automation...)"
                  required
                  value={formData.background}
                  onChange={(e) => setFormData({...formData, background: e.target.value})}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl h-28 outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white"
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <textarea 
                  placeholder="Job Description / Requirements snippet..."
                  required
                  value={formData.jobDescription}
                  onChange={(e) => setFormData({...formData, jobDescription: e.target.value})}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl h-28 outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/30 text-sm transition-all text-slate-950 dark:text-white"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isGenerating}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/20",
                isGenerating ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
              )}
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  AI Researching Lead...
                </span>
              ) : (
                <>
                  Generate Sequence
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </section>

        {/* Output Display */}
        <div className="space-y-6 min-h-[600px]">
          <AnimatePresence mode="wait">
            {!result && !isGenerating && (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12 glass rounded-[32px] border-dashed border-2 border-slate-200 dark:border-slate-800"
              >
                <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to generate?</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs">Fill in the lead details on the left to see the AI magic.</p>
              </motion.div>
            )}

            {isGenerating && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="h-20 w-full animate-pulse bg-slate-100 dark:bg-slate-900 rounded-3xl" />
                <div className="h-64 w-full animate-pulse bg-slate-100 dark:bg-slate-900 rounded-3xl" />
                <div className="h-32 w-full animate-pulse bg-slate-100 dark:bg-slate-900 rounded-3xl" />
              </motion.div>
            )}

            {result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Subject Block */}
                <div className="glass p-6 rounded-[32px] border-slate-200/50 dark:border-slate-800/50 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-500">Subject Line</span>
                    <button 
                      onClick={() => handleCopy(result.subject, 'subject')}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-indigo-600"
                    >
                      {copiedId === 'subject' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {result.subject}
                  </div>
                </div>

                {/* Body Block */}
                <div className="glass p-8 rounded-[32px] border-slate-200/50 dark:border-slate-800/50">
                   <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                         <Mail className="w-5 h-5 text-white" />
                       </div>
                       <span className="text-sm font-bold text-slate-900 dark:text-white">Primary Email</span>
                    </div>
                    <button 
                      onClick={() => handleCopy(result.body, 'body')}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-600 dark:text-slate-400 font-medium text-sm"
                    >
                      {copiedId === 'body' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      {copiedId === 'body' ? 'Copied' : 'Copy Email'}
                    </button>
                  </div>
                  <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans leading-relaxed text-[15px]">
                    {result.body}
                  </pre>
                </div>

                {/* Follow Ups */}
                <div className="grid md:grid-cols-2 gap-6">
                  {result.followUps.map((text, idx) => (
                    <div key={idx} className="glass p-6 rounded-[32px] border-slate-200/50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-950/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                           <MessageSquare className="w-4 h-4 text-indigo-500" />
                           <span className="text-xs font-bold text-slate-400 uppercase">Follow Up {idx + 1}</span>
                        </div>
                        <button 
                          onClick={() => handleCopy(text, `fu-${idx}`)}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400"
                        >
                          {copiedId === `fu-${idx}` ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "{text}"
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center p-8">
                  <button 
                    onClick={handleGenerate}
                    className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 rounded-2xl transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Regenerate Alternative
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EmailGenerator;
