import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Technical Proficiencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Languages, frameworks, and developer tools I utilize daily.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-purple-900/30 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}