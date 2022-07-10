import styled from '@emotion/styled';
import {css} from '@emotion/react';
import DayName from 'components/comm/DayName';

const TextWrap = css`
  position: absolute;
  width: 95%;
  height: 96%;
  border: 2px solid #779C6A;
  div {
    position: absolute;
    color: #333;
    right: 23px;
    text-align: right;
  }
`;

const GettingMarried = styled.p(
  {
    fontSize: "23px"
  },
  props=>({
    '&::before': {
      content: `'결혼합니다\\A`+props.names.groom+`❤`+props.names.bride+`'`,
      whiteSpace: 'pre'
    }
  })
);

const WeddingDate = styled.span({
  fontSize: "19px",
},props=>({
  '&::before': {
    content: `'`+props.yyyy+`. `+props.mm+`. `+props.dd+`. `+props.date+` `+props.HH+`시 `+props.MM+`분'`
  },
  '&::after': {
    content: `'\\A `+props.wSite+`'`,
    whiteSpace: 'pre'
  }
}));

const MainPicture = ({names, wDay, wSite, top})=>{
    return <>
      <img src={'./img/main.jpg'} height="93%" alt=''/>
      <div css={TextWrap}>
        <div style={{top:`${top}px`}}>
          <GettingMarried names={names}/>
          <WeddingDate
            yyyy={wDay.getFullYear()}
            mm={wDay.getMonth()+1}
            dd={wDay.getDate()}
            date={DayName[wDay.getDay()]}
            HH={wDay.getHours()}
            MM={wDay.getMinutes()}
            wSite={wSite}
          />
        </div>
      </div>
    </>
}

export default MainPicture;