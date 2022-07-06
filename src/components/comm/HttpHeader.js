import Head from 'next/head';
const {IMAGE_PATH} = process.env;

const HttpHeader = ()=>{
    return <Head>
        <title>🎉양희영❤김혜리 모바일 청첩장🎊</title>
        <meta charSet="utf-8"></meta>
        <meta property='og:image' content={`./${IMAGE_PATH}/thumb.jpg`} />
        <meta property="og:title" content="🎉양희영❤김혜리 청첩장🎊" />
        <meta property="og:description" content="10월1일 토요일 12시 30분 저희 결혼합니다!" />
        <meta property="og:url" content="https://m3rri.github.io/wedding-invitation-letter" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="wedding invitation letter for mobile"/>
        <meta property="og:locale" content="en_US"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7a0f2855bac0bd9122ee680095cf4fac"></script>
    </Head>;
}

export default HttpHeader;