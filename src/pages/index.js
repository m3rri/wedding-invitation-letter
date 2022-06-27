import { useRef, useEffect, useState } from 'react';
import Layout from '@c/comm/Layout';
import styled from '@emotion/styled';
import MainPicture from '@c/index/MainPicture';
import Introduce from '@c/index/Introduce';

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

export default function Home() {
  const [pageHeight, setPageHeight] = useState(700);
  const [top, setTop] = useState(100);

  const mainPicture = useRef();
  const introduceText = useRef();
  const map = useRef();
  const rollingPaper = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
    setTop(innerHeight/8.1);
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
        height: pageHeight, background: "rgba(196,125,120,1)", color: "#efefef"
      }}
      ref={map}
    >
      MAP
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