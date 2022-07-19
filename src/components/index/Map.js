import styled from '@emotion/styled';
import {css} from '@emotion/react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Title = styled.div(
    {
        margin: "40px 0 10px",
        fontWeight: "bold"
    },
    props=>({
        "&::before": {
            content: `'`+props.text+`'`
        }
    })
);
const Site = styled.p({
    border: '1px solid rgba(119,156,106,0.5)',
    padding: '13px 23px'
}, props=>({
    "&::before": {
        content: `'`+props.text+`'`,
        fontWeight: 'bold',
        fontSize: '18px'
    },
    "&::after": {
        content: `'서울시 광진구 광나루로 56길 85'`,
        display: 'block',
        fontSize: '16px',
        textAlign: 'center',
        paddingTop: '0.8em'
    }
}));

const MapTitle = ({site})=>{
    return <>
        <Title text={'오시는 길'} id="navigation"/>
        <Site text={site} />
    </>
}

const MapAppWrapper = styled.div({
    margin: "5px 20px 17px",
    fontSize: "16px"
});

const mapAppLink = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    a{
        align-items: center;
        display: flex;
        padding: 6px 10px;
        margin: 0 8px;
        background: #fff;
        box-shadow: 0px 1px 0.5px #779C6A;
        border-radius: 10% 10%;
    }
    a span{
        padding: 0 0 0 10px;
        font-size: 15px
    }
`;

const MapAppLink = ({href, imgSrc, text})=>{
    return <a href={href} target={'_blank'} rel={'noreferrer'}>
        <img src={imgSrc} width={37} height={37} alt=''/>
        <span css={{'&:before': {content: `'${text}'`}}}/>
    </a>
}

const MapAppLinkArea = ()=>{
    return <p css={mapAppLink}>
        <MapAppLink
            href="https://map.kakao.com/link/search/웨딩스퀘어%20강변점"
            imgSrc="img/kakaomap.png"
            text="카카오 지도"
        />
        <MapAppLink
            href="https://m.map.naver.com/search2/search.naver?query=%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4%20%EA%B0%95%EB%B3%80%EC%A0%90&sm=shistory&style=v5#/map/1/31761747"
            imgSrc="img/navermap.png"
            text="네이버 지도"
        />
    </p>;
}

const CopyText = ({text})=>{
    return <CopyToClipboard
        text={text}
        onCopy={()=>alert(`'${text}'\n클립보드에 복사되었습니다`)}
    >
        <span css={{
            margin: "0 8px",
            background:"rgba(119,156,106,0.25)",
            textDecorationLine:"underline",
            cursor: "pointer",
            '&:before': {
                content: `'[복사]'`
            }
        }}></span>
    </CopyToClipboard>;
}

const DescriptionWrapper = css`
    margin: 17px 0;
    p {
        margin: 20px 17px 25px;
    }
`;

const DescriptionSpan = styled.span(props=>({
    display: props.newLine ? 'block' : 'inline',
    paddingBottom: "0.55em",
    '&:before': {
        content: `'`+props.text+`'`,
        fontWeight: props.bold ? 'bold' : 'normal',
        fontSize: props.bold ? '1.17em' : '1em'
    }
}));

const Description = ()=>{
    return <div css={DescriptionWrapper}>
        <div style={{marginTop: '30px'}}></div>
        <p>
          <DescriptionSpan  text='🚗 자가용' bold={true} newLine={true}/>
          <DescriptionSpan  text='네비게이션 | 강변테크노마트 검색'/>
          <CopyText         text={'강변테크노마트'}/>
          <DescriptionSpan  text=''                     newLine={true}/>
          <DescriptionSpan  text='※ 서울시 광진구 광나루로 56길 85'/>
          <CopyText         text={'서울시 광진구 광나루로 56길 85'}/>
          <DescriptionSpan  text=''                     newLine={true}/>
          <DescriptionSpan  text='🅿 주차'   bold={true}/>
          <DescriptionSpan  text='　강변 테크노마트 지하 3층~지하 5층'/>
          <DescriptionSpan  text=''                     newLine={true}/>
          <DescriptionSpan  text='※ 주차장 기둥 번호 100번대 이용하시면 예식장과 가깝습니다'/>
          <DescriptionSpan  text=''                     newLine={true}/>
          <DescriptionSpan  text='※ 주차권은 답례품 받는 곳 옆 주차데스크에서 수령할 수 있습니다'/>
        </p>
        <div style={{width: '100%', borderTop: '1px solid #779C6A'}}></div>
        <p>
          <DescriptionSpan  text='🚃 지하철' bold={true}/>
          <DescriptionSpan  text='　2호선 강변역'/>
          <DescriptionSpan  text=''                     newLine={true}/>
          <DescriptionSpan  text='※ 1, 2번 출구사이 지하 연결 통로로 들어온 뒤 엘레베이터를 이용하세요'/>
        </p>
        <div style={{width: '100%', borderTop: '1px solid #779C6A'}}></div>
        <p>
          <DescriptionSpan  text='🚍 버스'   bold={true} newLine={true}/>
          <DescriptionSpan  text='시외, 고속버스 | 동서울터미널 하차 후 [지하철] 강변역 내용 참조하세요' newLine={true}/>
          <DescriptionSpan  text='지선버스 | 2223, 3212, 3214'                                       newLine={true}/>
          <DescriptionSpan  text='광역버스 | 11, 100, 1006, 1112, 1113, 1113-1, 1113-2, 1117, 1650, 1660, 5600, 5700, 9304'       newLine={true}/>
          <DescriptionSpan  text='※ 지선, 광역, 마을버스 등은 테크노마트 1층 에스컬레이터를 이용하세요' newLine={true}/>
        </p>
      </div>
}

const MapDescription = ()=>{
    return <MapAppWrapper>
        <MapAppLinkArea/>
        <Description/>
    </MapAppWrapper>;
}

export {MapTitle, MapDescription};