import MobileNav from './MobileNav';
import Player from './Player';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen pb-24">
      <main className="container mx-auto px-4 pt-4">{children}</main>
      <Player />
      <MobileNav />
    </div>
  );
}
