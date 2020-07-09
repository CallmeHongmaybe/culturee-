import '../styles/index.css'; 
import 'nprogress/nprogress.css'; 
import Router from 'next/router';
import NProgress from 'nprogress'; 

Router.onRouteChangeStart = () => {
  NProgress.inc(0.2);
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
    return (
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    )
}

  
export default MyApp