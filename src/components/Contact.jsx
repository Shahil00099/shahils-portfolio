import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#030712] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 max-w-4xl mx-auto">
          <div className="md:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-purple-900/30">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Contact Details
            </h3>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Email Address</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-500">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-purple-900/30">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <CheckCircle2 size={48} className="text-green-500 mb-3" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Thank you for reaching out. I'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/40 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/40 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/40 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}