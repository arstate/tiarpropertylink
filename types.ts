
// Fix: Added React import to provide the React namespace for TypeScript definitions
import React from 'react';

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
}
