import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Layout, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FreelanceOutreachEmail = () => {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Ultimate Guide to <span className="text-indigo-600 dark:text-indigo-400">Freelance Outreach Emails</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop waiting for clients on highly-saturated freelancing platforms. Learn the exact email strategy to proactively sign high-ticket clients, fill your pipeline, and double your independent income.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Why Cold Outreach is the Secret Weapon for Freelancers</h2>
          <p className="mb-6 leading-relaxed">
            If you are a freelancer competing on Upwork, Fiverr, or Toptal, you are participating in a race to the bottom. You are competing against thousands of other talented individuals willing to work for fractions of your rate. The paradigm shift happens when you decide to take control of your lead generation. By sending cold freelance outreach emails directly to business owners and decision-makers, you position yourself as a consultant, not a commodity.
          </p>
          <p className="mb-6 leading-relaxed">
            When you reach out directly, you bypass the bidding wars. You become the singular solution to their unspoken problem. But here is the catch: sending generic templates like <i>"Hi, I'm a web developer, let me build your website"</i> will get you marked as spam immediately. To succeed, your cold email must be a masterclass in adding upfront value.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">The 3-Step "Consultative" Pitch Framework</h2>
          <p className="mb-6 leading-relaxed">
            The best freelancers don't sell hours; they sell solutions. Your email should immediately diagnose a problem the client possesses, and position your services as the clear bridge to their desired outcome.
          </p>

          <div className="space-y-6 mb-12">
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">1</span> 
                  The Personalized Observation
                </h3>
                <p className="text-slate-700 dark:text-slate-300">You must prove you've actually looked at their business. <i>"I noticed your recent launch of Product X on ProductHunt..."</i> or <i>"While browsing your real estate firm's site, I loved the new property listings, but noticed..."</i></p>
             </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">2</span> 
                  The "Teardown" or Value-Add
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Give away your expertise for free. Mention a specific bottleneck in their current setup. If you are an SEO expert, point out a missing H1 tag or a critical page loading slowly. If you are a copywriter, rewrite one of their headlines in the email.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-sm">3</span> 
                  The Soft Call-to-Action
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Do not ask for a sale. Instead, ask for permission to share more free value, or a brief introductory call. <i>"Are you open to seeing a 2-minute Loom video where I explain how to fix this yourself?"</i></p>
             </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Real-World Outreach Examples</h2>

          {/* Bad Example */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-bold">
               <XCircle className="w-5 h-5" /> The Spammy Commodity (What Not To Do)
            </div>
            <div className="p-6 bg-red-50 dark:bg-red-500/5 rounded-2xl border border-red-100 dark:border-red-500/20 text-slate-800 dark:text-slate-200">
              <p className="mb-4"><strong>Subject:</strong> Freelance Graphic Design Services</p>
              <p>Dear Sir/Madam,</p>
              <p>I am a freelance graphic designer with over 8 years of experience. I can do logos, banners, social media posts, and website design.</p>
              <p>My rates are highly competitive and I deliver very quickly. Please see my portfolio link below. Let me know if you need any design work done this week.</p>
              <p className="mt-4">Thanks,<br/>Designer123</p>
            </div>
            <p className="text-sm text-slate-500 mt-2 italic">Result: Deleted immediately. It's desperate, untargeted, lists features instead of benefits, and gives the business owner homework (reviewing the portfolio to figure out where they fit).</p>
          </div>

          {/* Good Example */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-bold">
               <CheckCircle2 className="w-5 h-5" /> The Trust-Building Teardown (Winning Strategy)
            </div>
            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/5 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
              <p className="mb-4"><strong>Subject:</strong> 2 quick ideas for Acme's new landing page</p>
              <p>Hi Michael,</p>
              <p>I saw your post yesterday on LinkedIn about Acme's pivot to enterprise software—huge congratulations on the move upmarket!</p>
              <p>I was checking out your new enterprise landing page today. The messaging is super sharp, but I noticed the mobile layout breaks slightly on smaller screens, and the primary "Book Demo" button is taking about 4 seconds to load due to an unoptimized hero image.</p>
              <p>I'm a freelance frontend developer specializing in high-conversion SaaS sites. I recorded a quick 2-minute Loom video showing exactly what's causing the layout shift and how your team can fix it today.</p>
              <p>Are you the right person to send this video over to?</p>
              <p className="mt-4">Cheers,<br/>Alex Developer</p>
            </div>
            <p className="text-sm text-slate-500 mt-2 italic">Result: High open and reply rate. The subject line implies value. The email is highly personalized, offers free upfront value without being pushy, and lowers the barrier to entry with a soft CTA.</p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">The Metrics of Success</h2>
          <p className="mb-6 leading-relaxed">
            Cold outreach is a game of consistent volume paired with high quality. You should not expect a 50% reply rate. If you send 10 highly personalized emails, expect 2 or 3 positive replies, leading to 1 qualified discovery call. If your average freelance contract is $3,000, sending 10 high-quality emails could yield thousands of dollars in new business.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
             <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 flex items-center justify-center rounded-full shrink-0">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-2xl font-black">20-40%</div>
                    <div className="text-sm font-medium text-slate-500">Target Open Rate</div>
                 </div>
             </div>
             <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 flex items-center justify-center rounded-full shrink-0">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-2xl font-black">5-10%</div>
                    <div className="text-sm font-medium text-slate-500">Target Reply Rate</div>
                 </div>
             </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Scaling Your Freelance Business with AI</h2>
          <p className="mb-6 leading-relaxed">
            The obstacle most freelancers hit is time. You have billable hours to work on, leaving very little time to research prospects, write personalized emails, and handle follow-ups. If you spend 20 minutes crafting one email, outreach becomes too expensive.
          </p>
          <p className="mb-6 leading-relaxed">
            Leveraging AI specifically trained for outreach completely solves this problem. You can feed an AI engine a prospect's LinkedIn profile or website URL, and your specific freelance offering. Within seconds, it will synthesise exactly the kind of highly personalized, problem-first email detailed in the winning example above.
          </p>

        </div>
      </article>

      {/* Heavy CTA Section */}
      <section className="bg-gradient-to-tr from-indigo-700 to-purple-700 pt-20 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Scale Your Freelance Pipeline on Autopilot</h2>
           <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
             Stop spending hours staring at a blank screen. Use AI-CEP to instantly generate high-converting outreach emails uniquely tailored to your freelance prospects.
           </p>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:bg-slate-50 transition-colors text-lg">
               Start Generating Free Leads <ArrowRight className="w-5 h-5" />
             </Link>
           </motion.div>
        </div>
      </section>

    </div>
  );
};

export default FreelanceOutreachEmail;
