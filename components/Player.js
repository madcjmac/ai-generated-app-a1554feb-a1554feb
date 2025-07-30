import { useState } from 'react';
import { PlayIcon, PauseIcon, ForwardIcon, RewindIcon } from '@heroicons/react/solid';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-20 left-4 right-4 glass-effect rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <img 
          src="/album-placeholder.jpg" 
          className="w-12 h-12 rounded-lg object-cover"
          alt="Album art"
        />
        <div className="flex-1">
          <h4 className="font-semibold">Song Title</h4>
          <p className="text-sm text-gray-300">Artist Name</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-center items-center gap-6">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <RewindIcon className="w-6 h-6" />
          </button>
          <button 
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseIcon className="w-8 h-8" />
            ) : (
              <PlayIcon className="w-8 h-8" />
            )}
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <ForwardIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mt-4">
          <div className="h-1 bg-white/20 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
    </div>
  );
}
