import Head from 'next/head';
import { MusicNoteIcon, FireIcon, SparklesIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Glassmorphic MP3 Player</title>
        <meta name="description" content="Advanced MP3 player with glassmorphism design" />
      </Head>

      <section className="glass-effect rounded-3xl p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">Recently Played</h1>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map((item) => (
            <div key={item} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
              <img 
                src={`/album-${item}.jpg`} 
                className="w-full aspect-square rounded-lg object-cover mb-3"
                alt="Album cover"
              />
              <h3 className="font-semibold">Album Title</h3>
              <p className="text-sm text-gray-300">Artist Name</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-effect rounded-3xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {[1,2,3].map((item) => (
            <div key={item} className="min-w-[200px] bg-white/5 rounded-xl p-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-3" />
              <h3 className="font-semibold">Playlist Name</h3>
              <p className="text-sm text-gray-300">32 songs</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-effect rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 hover:bg-white/10">
            <MusicNoteIcon className="w-8 h-8" />
            <span>Upload</span>
          </button>
          <button className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 hover:bg-white/10">
            <FireIcon className="w-8 h-8" />
            <span>Trending</span>
          </button>
          <button className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 hover:bg-white/10">
            <SparklesIcon className="w-8 h-8" />
            <span>New</span>
          </button>
        </div>
      </section>
    </>
  );
}