import '../styles/globals.css';
import Layout from '../components/Layout';
import { PlayerProvider } from '../context/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlayerProvider>
  );
}

export default MyApp;
