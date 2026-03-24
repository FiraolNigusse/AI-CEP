import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Zap, Target } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">AI-CEP</h1>
        <div className="space-x-6">
          <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-16 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Generate <span className="text-blue-600">High-Converting</span> Cold Emails with AI
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Scale your outreach without sacrificing personalization. Generate a subject line, main email, and two follow-ups in seconds.
        </p>

        <div className="flex justify-center mb-20">
          <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Start Generating for Free
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Personalization</h3>
            <p className="text-gray-600">Tell us your background and your target's role—we handle the rest.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">3-Step Sequence</h3>
            <p className="text-gray-600">Get a subject line, main email, and two automated follow-ups instantly.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Credit System</h3>
            <p className="text-gray-600">Start with 3 free credits and top up when you're ready to scale.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
