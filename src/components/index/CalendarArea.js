import styled from '@emotion/styled';
import Calendar from 'components/Calendar';

const DDay = styled.span(
    {
        position: "absolute",
        left: "50%",
        fontWeight: "normal",
        backgroundSize: "100px 100px",
        lineHeight: "100px",
        color: "#efefef",
        transform: "translate(-50%,-8%)",
        letterSpacing: "-0.03em"
    },
    props=>({
        '&:before': {
            content: `'D-`+props.dDay+`'`
        }
    })
);
  
const CalendarArea = ({wDay, dDay})=>{
    return <div style={{margin: "35px 0", textAlign: "center"}}>
        <img src="img/dDay.png" height={80}/>
        <DDay dDay={dDay}/>
        <Calendar date={wDay}/>
    </div>;
}

export default CalendarArea;