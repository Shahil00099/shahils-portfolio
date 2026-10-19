import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('work');
  const filteredTimeline = timelineData.filter((item) => item.type === activeTab);

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About & Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            My background, professional journey, and academic education.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-purple-900/40 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase size={16} /> Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap size={16} /> Education
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto border-l-2 border-purple-500/30 pl-6 space-y-8">
          {filteredTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-purple-900/30 transition-all hover:border-purple-500/50">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
                  {item.role}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-2">
                  {item.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}