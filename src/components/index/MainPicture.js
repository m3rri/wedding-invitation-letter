import styled from '@emotion/styled';
import {css} from '@emotion/react';
import DayName from '@c/comm/DayName';

const TextWrap = css`
  position: absolute;
  width: 95%;
  height: 96%;
  border: 2px solid #779C6A;
  z-index: 10;
  div {
    position: absolute;
    color: #779C6A;
    right: 23px;
    text-align: right;
    font-weight: bold
  }
`;

const DDay = styled.span(
  {
    fontWeight: "normal"
  },
  props=>({
    '&:before': {
      content: `'D - `+props.dDay+`'`
    }
  })
);

const GettingMarried = styled.p(
  {
    fontSize: "23px"
  },
  props=>({
    '&::before': {
      content: `'`+props.names.groom+`♡`+props.names.bride+`\\A결혼합니다'`,
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

const MainPicture = ({names, wDay, dDay, wSite, top})=>{
    return <>
      <img src={'/img/thumb.jpg'} height="93%"/>
      <div css={TextWrap}>
        <div style={{top:`${top}px`}}>
          <DDay dDay={dDay}/>
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