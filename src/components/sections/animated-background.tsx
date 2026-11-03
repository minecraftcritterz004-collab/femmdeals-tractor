import React from 'react';
import {
  Flower2,
  Brush,
  Sparkles,
  Heart,
  Gem,
  WandSparkles,
  SprayCan
} from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Flower2 className="absolute top-20 left-10 w-12 h-12 text-black animate-rotate-slow" />
        <Brush className="absolute top-40 left-20 w-8 h-8 text-black animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-black animate-twinkle" />
        <SprayCan className="absolute bottom-40 left-16 w-10 h-10 text-black animate-rotate-reverse" />
        <Gem className="absolute bottom-60 right-20 w-12 h-12 text-black animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-black animate-rotate-slow" />
        <WandSparkles className="absolute top-1/3 right-12 w-8 h-8 text-black animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <Flower2 className="absolute top-24 left-12 w-20 h-20 text-black animate-float-gentle" />
        <Brush className="absolute top-32 right-16 w-16 h-16 text-black animate-float-gentle" />
        <Gem className="absolute top-1/3 left-20 w-14 h-14 text-black animate-float-gentle" />
        <SprayCan className="absolute top-1/2 right-24 w-16 h-16 text-black animate-float-gentle" />
        <Heart className="absolute bottom-40 left-16 w-20 h-20 text-black animate-float-gentle" />
        <WandSparkles className="absolute bottom-32 right-20 w-16 h-16 text-black animate-float-gentle" />
      </div>
    </>
  );
};

export default AnimatedBackground;