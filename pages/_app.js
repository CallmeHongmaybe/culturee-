import '../styles/index.css';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import Header from '../components/Header'
import NProgress from 'nprogress';
import App from 'next/app'
import { decode } from 'jsonwebtoken'
import cookie from 'cookie'

Router.onRouteChangeStart = () => {
  NProgress.inc(0.2);
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function MyApp({ Component, pageProps, userName, pathname }) {
  console.log(`pathname = ${pathname}`)
  return (
    <div className="font-sans">
      {pathname === "/login" && pathname === "/signup" ? null : <Header nameOfUser={userName} />}
      <Component {...pageProps} />
    </div>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const authCookie = appContext.ctx.req ? appContext.ctx.req.headers.cookie : undefined;
  const userName = authCookie ? decode((cookie.parse(authCookie)).auth).name : null;
  const pathname = appContext.ctx.pathname; 
  return { ...appProps, userName, pathname }
}

// appContext 
// keys = AppTree,Component,router,ctx
// appContext.ctx = err,req,res,pathname,query,asPath,AppTree
// appContext.router = route,pathname,query,asPath,basePath,events,isFallback
// appContext.AppTree = null
// appContext.Component = null
