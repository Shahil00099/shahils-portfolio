import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-purple-900/30 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}