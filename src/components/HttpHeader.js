import Head from 'next/head'

const HttpHeader = ()=>{
    return <Head>
        <title>🎉양희영❤김혜리 모바일 청첩장🎈</title>
        <meta charSet="utf-8"></meta>
        <meta property='og:image' content="public/img/thumb.jpg" />
        <meta property="og:title" content="🎉양희영❤김혜리 청첩장🎈" />
        <meta property="og:description" content="10월 01일 토요일 12시 30분 저희 결혼합니다!" />
        <meta property="og:url" content="http://172.30.1.32:3000/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="wedding invitation letter for mobile"/>
        <meta property="og:locale" content="en_US"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
    </Head>;
}

export default HttpHeader;