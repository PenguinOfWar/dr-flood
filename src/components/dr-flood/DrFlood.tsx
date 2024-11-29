'use client';

import { HTMLAttributes } from 'react';
import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';

const Game = dynamic(() => import('./Game'), {
  ssr: false
});

interface DrFloodProps extends HTMLAttributes<HTMLDivElement> {}

export default function DrFlood({ className, ...props }: DrFloodProps) {
  return (
    <div className={cn(className)} {...props}>
      <Game />
    </div>
  );
}
