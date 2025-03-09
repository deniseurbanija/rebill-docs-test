'use client';
import React from 'react';

interface ResultBoxProps {
  children: React.ReactNode;
}

export const ResultBox: React.FC<ResultBoxProps> = ({ children }) => {
  return (
    <div className="result-box my-6 overflow-hidden rounded-2xl bg-zinc-900 dark:bg-zinc-800  shadow-md dark:ring-1 dark:ring-white/10 p-4 text-gray-300">
      {children}
    </div>
  );
};
