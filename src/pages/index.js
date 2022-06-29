import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Layout from 'components/comm/Layout';
import MainPicture from 'components/index/MainPicture';
import Introduce from 'components/index/Introduce';

const ArticleWithHeight = styled.article(
  {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    width: "100%",
    overflow: "hidden",
    position: "relative"
  },
  props => ({
    height: `${props.height}px`,
    color: props.color,
    background: props.background
  })
);

const NAME_GRROM = '양희영';
const NAME_BRIDE = '김혜리';
const W_DAY = new Date(2022, 9, 1, 12, 30);
const D_DAY = Math.floor((W_DAY - new Date())/(1000*60*60*24));
const W_SITE = '웨딩스퀘어 강변 베니르홀(3F)';

const INTRO_GROOM = ['신랑', '양윤모', '김순임', '의 차남', '희영'];
const INTRO_BRIDE = ['신부', '김용기', '이재경', '의 장녀', '혜리'];
const INTRO_TEXT = [
  `20대에 처음만난 저희는\\A
  학업, 군대, 졸업, 취업 그리고 결혼까지\\A
  12년의 세월을 함께하며 서로 사랑하고 성장했습니다.`,
  `이런 저희 두 사람, 가을의 탐스러운 열매처럼\\A
  가족이라는 결실을 맺으려합니다.\\A
  귀한 걸음 하시어 따듯한 마음으로 축하해 주시면\\A
  더없는 기쁨이 되겠습니다.`
];

const createKakaoMap = (ref)=>{
  const marker = new kakao.maps.LatLng(37.536038, 127.095678);
  const imgSrc = `/img/mapMarker.png`,
        imgSize = new kakao.maps.Size(38, 40),
        imgOption = {offset: new kakao.maps.Point(19, 40)};
  const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
  const kakaoMap = new kakao.maps.Map(ref.current, {
    center: marker,
    level: 3
  });

  kakaoMap.setDraggable(false);
  kakaoMap.setZoomable(false);

  new kakao.maps.Marker({
    position: marker,
    image: markerImg,
    clickable: true
  })
  .setMap(kakaoMap);
}

export default function Home() {
  const [pageHeight, setPageHeight] = useState(700);
  const [top, setTop] = useState(100);

  const mainPicture = useRef();
  const introduceText = useRef();
  const mapWapper = useRef();
  const mapArea = useRef();
  const rollingPaper = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
    setTop(innerHeight/8.1);

    createKakaoMap(mapArea);
  }, []);

  return <Layout>
    <ArticleWithHeight
      css={{height: pageHeight}}
      ref={mainPicture}
    >
      <MainPicture
        names={{groom: NAME_GRROM, bride: NAME_BRIDE}}
        wDay={W_DAY}
        dDay={D_DAY}
        wSite={W_SITE}
        top={top}
      />
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(245,202,164,0.15)", color: "#8BA5B4"
      }}
      ref={introduceText}
    >
      <div  style={{width:"85%",textAlign:'center'}}>
        <Introduce
          textList={INTRO_TEXT}
          intro={{groom: INTRO_GROOM, bride: INTRO_BRIDE}}
          wDay={W_DAY}
        />
      </div>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(196,125,120,0.15)", color: "#8BA5B4"
      }}
      ref={mapWapper}
    >
      <div style={{margin:"40px 0 10px"}}>오시는 길</div>
      <p>웨딩스퀘어 강변점 3층 베니르홀</p>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(196,125,120,0.15)", color: "#8BA5B4"
      }}
      ref={mapWapper}
    >
      <div id="map" style={{width:"100%",height:"250px"}} ref={mapArea}></div>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(196,125,120,0.15)", color: "#8BA5B4"
      }}
      ref={mapWapper}
    >
      <div style={{margin:"30px 30px"}}>
        <p>
          <a
            href="https://map.kakao.com/link/search/웨딩스퀘어%20강변점"
            target={'_blank'}
            rel={"noreferrer"}
            style={{padding:"0 15px"}}>
            <img src="img/kakaomap.png" width={35} height={30}/>
            <span style={{padding:"0 0 0 10px"}}>카카오맵</span>
          </a>
          <a
            href="https://m.map.naver.com/search2/search.naver?query=%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4%20%EA%B0%95%EB%B3%80%EC%A0%90&sm=shistory&style=v5#/map/1/31761747"
            target={'_blank'}
            rel={"noreferrer"}
            style={{padding:"0 15px"}}>
            <span style={{padding:"0 0 0 10px"}}>네이버맵</span>
          </a>
        </p>
        <p>
          [자차]<br/>
          네비게이션 | 강변테크노마트 검색<br/>
          도로명 | 서울시 광진구 광나루로 56길 85<br/>
          [주차] 강변 테크노마트 지하 3층, 지하 4층<br/>
          100번대 이용하면 예식장과 가깝습니다.<br/>
        </p>
        <p>
          [지하철] 2호선 강변역<br/>
          1, 2번 출구사이 연결 통로를 이용
        </p>
        <p>
          [버스]<br/>
          시외, 고속버스 | 동서울터미널 하차 후 강변역 통로 이용<br/>
          지선버스 | 2223, 3212, 3214<br/>
          광역버스 | 1112, 1117, 1650, 1660, 5600, 5700A, 5700B, 9304<br/>
        </p>
      </div>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        height: pageHeight, background: "#D3F2D9", color: "#fff"
      }}
      ref={rollingPaper}
    >
      ROLLING PAPER
    </ArticleWithHeight>
  </Layout>;
}