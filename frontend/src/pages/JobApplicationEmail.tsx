import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const JobApplicationEmail = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full px-8 py-4 flex items-center justify-between border-b border-white/40 dark:border-slate-900/40 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
             <Layout className="w-4 h-4 text-white" />
          </div>
          AI-CEP
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold hover:text-indigo-600 transition-colors">Sign In</Link>
          <Link to="/register" className="text-sm font-bold bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">Get Started Free</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            How to Write a <span className="text-indigo-600 dark:text-indigo-400">Cold Email for a Job Application</span> That Gets Replies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In today's hyper-competitive job market, relying solely on job boards is a losing game. Discover the exact frameworks, proven templates, and strategies to land interviews directly through cold emailing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          
          <h2 className="text-3xl font-bold mb-6 mt-12">The Hidden Job Market and Why Cold Emailing Works</h2>
          <p className="mb-6 leading-relaxed">
            Did you know that an estimated 70% to 80% of jobs are never published on public job boards like Indeed or LinkedIn? This phenomenon is known as the "hidden job market." When a company needs to hire, their first instinct isn't to spend thousands of dollars on sponsored job listings and sift through 5,000 generic resumes. Instead, they look internally, ask for referrals, and—crucially—they hire people who proactively reach out showcasing explicit value.
          </p>
          <p className="mb-6 leading-relaxed">
            Sending a cold email for a job application bypasses the traditional Applicant Tracking System (ATS), putting your name directly in the inbox of the decision-maker. However, most people do this completely incorrectly. A message saying, <i>"Hi, I'm looking for a job, please find my resume attached"</i> will be deleted in exactly 1.2 seconds. To stand out, your email must be personalized, hyper-relevant, and laser-focused on solving the company's immediate problems.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">The Anatomy of the Perfect Cold Email for Jobs</h2>
          <p className="mb-6 leading-relaxed">
            A winning cold email is built on four core pillars. By mastering these, you immediately elevate yourself above 99% of applicants.
          </p>

          <div className="space-y-6 mb-12">
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">1</span> 
                  The Subject Line
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Your subject line has one job: get the email opened. Keep it short, avoid clickbait, and mention something specific about them. Examples: <i>"Ideas for [Company]'s Q3 launch"</i> or <i>"Loved your podcast on scaling engineering."</i></p>
             </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">2</span> 
                  The Hook (First Line)
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Do not introduce yourself yet. Start with them. Compliment recent work, bring up a mutual connection, or reference news related to their specific department. Prove you did your homework.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">3</span> 
                  The Value Proposition
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Briefly connect your skills to their current challenges. Mention a specific metric you improved at your last job, or attach a "proof of work" project you did specifically for them.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">4</span> 
                  The Call to Action (CTA)
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Don't ask them for a job. Ask for a brief conversation. <i>"Would you have 10 minutes next Tuesday to share your thoughts on my proposed strategy?"</i></p>
             </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Real Examples: The Good, The Bad, and The Ugly</h2>

          {/* Bad Example */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-bold">
               <XCircle className="w-5 h-5" /> Bad Example (The Generic Blast)
            </div>
            <div className="p-6 bg-red-50 dark:bg-red-500/5 rounded-2xl border border-red-100 dark:border-red-500/20 text-slate-800 dark:text-slate-200">
              <p className="mb-4"><strong>Subject:</strong> Job Application - Marketing Manager</p>
              <p>To whom it may concern,</p>
              <p>I am writing to express my interest in the Marketing Manager position at your company. I have 5 years of experience in marketing and I believe I would be a great fit for your team. Please find my resume attached.</p>
              <p>I look forward to hearing from you.</p>
              <p className="mt-4">Best,<br/>John Generic</p>
            </div>
            <p className="text-sm text-slate-500 mt-2 italic">Why it fails: Borings subject line, generic opening, focuses entirely on "I", and adds zero value to the hiring manager's day.</p>
          </div>

          {/* Good Example */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-bold">
               <CheckCircle2 className="w-5 h-5" /> Stellar Example (The Value-Add Approach)
            </div>
            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/5 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
              <p className="mb-4"><strong>Subject:</strong> Spotted a gap in Acme's onboarding flow</p>
              <p>Hi Sarah,</p>
              <p>I loved your recent LinkedIn post about optimizing the user journey at Acme Corp. It inspired me to walk through your current onboarding process myself.</p>
              <p>While the initial signup is incredibly smooth, I noticed a 3-step friction point during the profile setup phase. At my previous role at BetaTech, we faced a similar issue and I redesigned the flow, which increased completion rates by 24%.</p>
              <p>I took the liberty of mocking up a quick Figma wireframe showing how Acme might implement a similar fix. I realize you're currently hiring for a UX Lead—whether or not I'm a fit, I hope this mockup is helpful!</p>
              <p>Are you open to a 10-minute chat next Thursday to discuss the wireframes?</p>
              <p className="mt-4">Best,<br/>Jane Expert</p>
            </div>
            <p className="text-sm text-slate-500 mt-2 italic">Why it wins: Personalized hook, proves competence via a "proof of work" project, highly relevant to a known pain point, and a low-friction CTA.</p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Crucial Do's and Don'ts</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-12 list-none p-0">
            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
               <span><strong>DO</strong> email the hiring manager or department head directly, rather than a generic HR inbox.</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
               <span><strong>DON'T</strong> make it all about you. Frame your experience around how it solves their problems.</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
               <span><strong>DO</strong> follow up at least twice. Most responses happen on the second or third touchpoint.</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
               <span><strong>DON'T</strong> send a 5-paragraph essay. Keep it under 150 words. Attention spans are short.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">How AI Can Revolutionize Your Job Search</h2>
          <p className="mb-6 leading-relaxed">
            Writing highly personalized emails takes time. If you apply to 10 companies, researching each executive, finding an angle, and drafting a bespoke email can take an entire weekend. This is where artificial intelligence becomes your ultimate career cheat code.
          </p>
          <p className="mb-6 leading-relaxed">
            Instead of starting from a blank page, you can use specialized tools that ingest the company's job description, the hiring manager's background, and your specific career history to generate hyper-personalized outreach sequences in seconds. It ensures your tone is perfect, your value proposition is clear, and your follow-ups are ready to go.
          </p>

        </div>
      </article>

      {/* Heavy CTA Section */}
      <section className="bg-indigo-600 pt-20 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Stop guessing. Start landing interviews.</h2>
           <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
             Use our AI-powered engine to instantly craft personalized cold emails based on the hiring manager's background and the exact job description.
           </p>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:bg-slate-50 transition-colors text-lg">
               Generate Your First Email Free <ArrowRight className="w-5 h-5" />
             </Link>
           </motion.div>
        </div>
      </section>

    </div>
  );
};

export default JobApplicationEmail;
