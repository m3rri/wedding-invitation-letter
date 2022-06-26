import HttpHeader from '@c/HttpHeader';
import '@s/globals.css';

function MyApp({ Component, pageProps }) {  
  return <>
    <HttpHeader/>
    <Component {...pageProps} />
  </>;
}

export default MyApp;