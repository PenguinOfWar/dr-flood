import { Pixelify_Sans } from 'next/font/google';

import DrFlood from '@/components/dr-flood/DrFlood';
import { cn } from '@/lib/utils';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Add subsets as needed
  weight: ['400', '700'], // Include the required weights
  display: 'swap' // Ensures text visibility during font load
});

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen overflow-scroll px-4 py-16">
      <div className="w-[600px]">
        <h1
          className={cn(
            pixelifySans.className,
            'text-[2.5rem] md:text-[4rem] text-center mb-8'
          )}>
          Dr. Flood Runner
        </h1>
        <DrFlood />
        <div className="flex items-center justify-center">
          <div className="p-8 text-center">
            <h2
              className={cn(
                pixelifySans.className,
                'text-[2rem] text-center mb-4'
              )}>
              Controls
            </h2>

            <p>
              Press the <strong>space bar</strong> to jump and to start the game
            </p>
            <p>
              Use the <strong>down arrow key</strong> to duck
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
