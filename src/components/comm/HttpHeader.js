import Head from 'next/head';
const {IMAGE_PATH} = process.env;

const HttpHeader = ()=>{
    return <Head>
        <title>πμν¬μβ€κΉνλ¦¬ λͺ¨λ°μΌ μ²­μ²©μ₯π</title>
        <meta charSet="utf-8"></meta>
        <meta property='og:image' content={`./${IMAGE_PATH}/thumb.png`} />
        <meta property="og:title" content="πμν¬μβ€κΉνλ¦¬ μ²­μ²©μ₯π" />
        <meta property="og:description" content="10μ1μΌ ν μμΌ 12μ 30λΆ μ ν¬ κ²°νΌν©λλ€!" />
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