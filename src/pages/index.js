import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Layout from 'components/comm/Layout';
import MainPicture from 'components/index/MainPicture';
import Introduce from 'components/index/Introduce';
import {MapTitle, MapDescription} from 'components/index/Map';
import Gallery from 'components/index/Gallery';
import SendHeart from 'components/index/SendHeart';
import CalendarArea from 'components/index/CalendarArea';

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

const INTRO_GROOM = ['신랑',
{name:'양윤모',phone:'010-0000-0001'},
{name:'김순임',phone:'010-0000-0002'},
'의 차남',
{name:'희영',phone:'010-0000-0003'}];
const INTRO_BRIDE = ['신부',
{name:'김용기',phone:'010-0000-0004'},
{name:'이재경',phone:'010-0000-0005'},
'의 장녀',
{name:'혜리',phone:'010-0000-0006'}];
const INTRO_TEXT = [
  `20대에 처음 만난 저희는\\A
  12년의 시간 동안 서로 사랑하고 같이 성장해왔습니다.`,
  `이런 저희 두 사람, 가을의 탐스러운 열매처럼\\A
  부부의 결실을 맺으려 합니다.`,
  `귀한 걸음 하시어 따뜻한 마음으로 축하해 주시면\\A
  더없는 기쁨이 되겠습니다.`
];

const HEART_GROOM = {
  kakao: '281006011000035848853992',
  accounts: [{
    bank: "신한은행", owner: NAME_GRROM, account: "110-258-259800"
  }]
};
const HEART_BRIDE = {
  kakao: '281006011161815290004942',
  accounts: [{
    bank: "하나은행", owner: NAME_BRIDE, account: "590-810131-7650"
  }]
};

export default function Home() {
  const [pageHeight, setPageHeight] = useState(700);
  const [top, setTop] = useState(100);

  const mainPicture = useRef();
  const introduceText = useRef();
  const calendar = useRef();
  const gallery = useRef();
  const mapWapper = useRef();
  const mapArea = useRef();
  const sendHeart = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
    setTop(innerHeight/8.1);

    createKakaoMap(mapArea);
  }, []);

  return <Layout>
    <ArticleWithHeight
      css={{height: pageHeight, minHeight: "600px"}}
      ref={mainPicture}
    >
      <MainPicture
        names={{groom: NAME_GRROM, bride: NAME_BRIDE}}
        wDay={W_DAY}
        wSite={W_SITE}
        top={top}
      />
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        minHeight: '690px', background: "rgba(211,242,217,0.10)", color: "#333"
      }}
      ref={introduceText}
    >
      <div  style={{width:"85%",textAlign:'center'}}>
        <Introduce
          textList={INTRO_TEXT}
          intro={{groom: INTRO_GROOM, bride: INTRO_BRIDE}}
        />
      </div>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(211,242,217,0.10)", color: "#333"
      }}
      ref={calendar}
    >
      <CalendarArea wDay={W_DAY} dDay={D_DAY}/>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(211,242,217,0.15)", padding: '25px 0'
      }}
      ref={gallery}
    >
      <Gallery/>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "rgba(211,242,217,0.1)", color: "#333", padding: "0 15px"
      }}
      ref={mapWapper}
    >
      <MapTitle site={W_SITE}/>
      <div id="map" style={{width:"100%",height:"250px"}} ref={mapArea}>
      </div>
      <MapDescription/>
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        background: "#fff", padding: '25px 0'
      }}
      ref={sendHeart}
    >
      <SendHeart groom={HEART_GROOM} bride={HEART_BRIDE}/>
    </ArticleWithHeight>
  </Layout>;
}

const createKakaoMap = (ref)=>{
  const marker = new kakao.maps.LatLng(37.536038, 127.095678);
  const imgSrc = `img/mapMarker.png`,
          imgSize = new kakao.maps.Size(110, 70),
          imgOption = {offset: new kakao.maps.Point(46, 60)};
  const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
  const kakaoMap = new kakao.maps.Map(ref.current, {
      center: marker,
      level: 3
  });

  new kakao.maps.Marker({
      position: marker,
      image: markerImg,
      clickable: true
  })
  .setMap(kakaoMap);
}