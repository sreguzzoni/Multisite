import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
