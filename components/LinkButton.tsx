
import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  item: LinkItem;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center w-full p-4 mb-4 rounded-xl transition-all duration-200 transform 
        active:scale-[0.97] md:hover:-translate-y-1
        ${item.isPrimary 
          ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-900 border-none shadow-lg shadow-yellow-500/20' 
          : 'bg-slate-800/50 hover:bg-slate-700/80 text-white border border-slate-700/50 backdrop-blur-md'
        }
      `}
    >
      <div className={`
        flex items-center justify-center w-12 h-12 rounded-lg mr-4 transition-colors
        ${item.isPrimary ? 'bg-slate-900/10' : 'bg-slate-700 group-hover:bg-slate-600'}
      `}>
        {item.icon}
      </div>
      <div className="flex-1 text-left">
        <h3 className={`font-semibold text-lg leading-tight ${item.isPrimary ? 'text-slate-900' : 'text-white'}`}>
          {item.title}
        </h3>
        {item.subtitle && (
          <p className={`text-xs mt-1 font-medium ${item.isPrimary ? 'text-slate-900' : 'text-slate-400'}`}>
            {item.subtitle}
          </p>
        )}
      </div>
      {/* Arrow icon: visible at low opacity for touch, full on hover/active */}
      <div className={`opacity-30 group-hover:opacity-100 group-active:opacity-100 transition-opacity mr-2 ${item.isPrimary ? 'text-slate-900' : 'text-yellow-500'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </a>
  );
};