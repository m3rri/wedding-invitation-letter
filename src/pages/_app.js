import HttpHeader from '@c/comm/HttpHeader';
import '@s/globals.css';

function MyApp({ Component, pageProps }) {  
  return <>
    <HttpHeader/>
    <Component {...pageProps} />
  </>;
}

export default MyApp;