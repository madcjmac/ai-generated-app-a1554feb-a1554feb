import { HomeIcon, LibraryIcon, UserIcon, PlaylistIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-effect px-6 py-2">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="nav-item">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </a>
        </Link>
        <Link href="/library">
          <a className="nav-item">
            <LibraryIcon className="w-6 h-6" />
            <span className="text-xs">Library</span>
          </a>
        </Link>
        <Link href="/playlists">
          <a className="nav-item">
            <PlaylistIcon className="w-6 h-6" />
            <span className="text-xs">Playlists</span>
          </a>
        </Link>
        <Link href="/profile">
          <a className="nav-item">
            <UserIcon className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
