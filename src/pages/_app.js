import HttpHeader from 'components/comm/HttpHeader';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {  
  return <>
    <HttpHeader/>
    <Component {...pageProps} />
  </>;
}

export default MyApp;