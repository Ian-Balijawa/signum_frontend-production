import Footer from '@/components/Footer';
import NavigateBar from '@/components/NavigateBar';
import '@/styles/globals.css';
// import '@splidejs/splide/dist/css/splide.min.css';
// import 'swiper/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import SiteBeingUpdated from '@/containers/SiteBeingUpdated';

export default function App({ Component, pageProps }) {
  const siteIsBeingUpdated = false;

  const route = useRouter();

  const noHomePageNavBar = route.pathname === '/' ? false : true;

  const isHomePageFooter = route.pathname === '/' ? false : true;

  return siteIsBeingUpdated ? (
    <SiteBeingUpdated />
  ) : (
    <>
      {noHomePageNavBar && <NavigateBar />}
      <Component {...pageProps} />
      {/* <Footer /> */}
      {isHomePageFooter && <Footer />}
    </>
  );
}
