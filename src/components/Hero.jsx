import React from 'react';
import { Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-slate-50 dark:bg-[#030712] transition-colors">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Available for New Projects
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>

          <p className="text-xl font-medium text-slate-600 dark:text-slate-300">
            {personalInfo.role}
          </p>

          <p className="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-600/30 hover:scale-[1.02]"
            >
              View Work <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-purple-800/50 hover:bg-slate-200 dark:hover:bg-purple-900/20 text-slate-800 dark:text-slate-200 font-semibold transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {/* GitHub SVG */}
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl bg-slate-900 dark:bg-slate-950/90 border border-slate-800 dark:border-purple-900/50 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Terminal size={14} /> Developer.js
              </div>
            </div>

            <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-green-400">'{personalInfo.name}'</span>,<br />
                &nbsp;&nbsp;location: <span className="text-green-400">'{personalInfo.location}'</span>,<br />
                &nbsp;&nbsp;skills: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'React'</span>, <span className="text-green-400">'PHP/Laravel'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Tailwind'</span>, <span className="text-green-400">'MySQL'</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;passionate: <span className="text-amber-400">true</span><br />
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}