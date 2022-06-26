import { useEffect } from "react";
import { useRouter } from "next/router";
import HttpHeader from '@c/HttpHeader';
import {css} from '@emotion/react';

const NotFound = () => {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>router.push("/"), 500);
  });

  return <>
    <HttpHeader/>
    <div css={errorStyle}>
      Page Not Found 😋
    </div>
  </>;
};

const errorStyle = ()=> css`
  display: flex;
  background-color: #E9967A;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 900;
  color: #efefef;
`

export default NotFound;