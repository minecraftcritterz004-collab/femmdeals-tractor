import React from 'react';
import {
  Shirt,
  Tractor,
  Shovel,
  Pickaxe,
  Sprout,
  Wheat,
  Axe
} from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Shirt className="absolute top-20 left-10 w-12 h-12 text-[#a02817] animate-rotate-slow" />
        <Tractor className="absolute top-40 left-20 w-8 h-8 text-[#a02817] animate-float-spin" />
        <Sprout className="absolute top-32 right-16 w-10 h-10 text-[#a02817] animate-twinkle" />
        <Shovel className="absolute bottom-40 left-16 w-10 h-10 text-[#a02817] animate-rotate-reverse" />
        <Pickaxe className="absolute bottom-60 right-20 w-12 h-12 text-[#a02817] animate-float-gentle" />
        <Wheat className="absolute top-1/2 left-8 w-8 h-8 text-[#a02817] animate-rotate-slow" />
        <Axe className="absolute top-1/3 right-12 w-8 h-8 text-[#a02817] animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <Shirt className="absolute top-24 left-12 w-20 h-20 text-[#a02817] animate-float-gentle" />
        <Tractor className="absolute top-32 right-16 w-16 h-16 text-[#a02817] animate-float-gentle" />
        <Sprout className="absolute top-1/3 left-20 w-14 h-14 text-[#a02817] animate-float-gentle" />
        <Shovel className="absolute top-1/2 right-24 w-16 h-16 text-[#a02817] animate-float-gentle" />
        <Pickaxe className="absolute bottom-40 left-16 w-20 h-20 text-[#a02817] animate-float-gentle" />
        <Wheat className="absolute bottom-32 right-20 w-16 h-16 text-[#a02817] animate-float-gentle" />
      </div>
    </>
  );
};

export default AnimatedBackground;