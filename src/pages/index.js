import { useRef, useEffect, useState } from 'react';
import Layout from '@c/Layout';
import styled from '@emotion/styled';

const ArticleWithHeight = styled.article(
  {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px"
  },
  props => ({
    height: `${props.height}px`,
    color: props.color,
    backgroundColor: props.backgroundColor
  })
);

export default function Home() {
  const [pageHeight, setPageHeight] = useState(700);
  const mainPicture = useRef();
  const introduceText = useRef();
  const map = useRef();
  const rollingPaper = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
  }, []);

  return <Layout>
    <ArticleWithHeight
      css={{
        height: pageHeight, backgroundColor: "turquoise", color: "#333"
      }}
      ref={mainPicture}
    >
      MAIN PICTURE3
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        height: pageHeight, backgroundColor: "tomato", color: "#efefef"
      }}
      ref={introduceText}
    >
      INTRODUCE TEXT2
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        height: pageHeight, backgroundColor: "burlywood", color: "#efefef"
      }}
      ref={map}
    >
      MAP2
    </ArticleWithHeight>
    <ArticleWithHeight
      css={{
        height: pageHeight, backgroundColor: "goldenrod", color: "#fff"
      }}
      ref={rollingPaper}
    >
      ROLLING PAPER
    </ArticleWithHeight>
  </Layout>;
}