import React from 'react';

const Loading = () => {
    return (
     <div class="flex items-center justify-center min-h-screen bg-slate-50">
  <div class="relative flex items-center justify-center">
    
    <div class="absolute w-24 h-24 border-4 border-t-indigo-500 border-r-transparent border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>
    
    <div class="absolute w-20 h-20 border-4 border-t-transparent border-r-cyan-400 border-b-transparent border-l-amber-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
    
    <div class="flex flex-col items-center">
      <span class="text-xl font-bold tracking-widest text-slate-700 animate-pulse">
        ARTIFY
      </span>
      <div class="w-1.5 h-1.5 mt-1 bg-indigo-500 rounded-full animate-bounce"></div>
    </div>
    
  </div>
</div>
    );
};

export default Loading;