import styled from '@emotion/styled';
import Calendar from 'components/Calendar';

const DDay = styled.span(
    {
        position: "absolute",
        left: "50%",
        fontWeight: "normal",
        backgroundSize: "100px 100px",
        lineHeight: "100px",
        transform: "translate(-50%,0%)",
        letterSpacing: "0.1em"
    },
    props=>({
        '&:before': {
            content: `'D-`+props.dDay+`'`
        }
    })
);
  
const CalendarArea = ({wDay, dDay})=>{
    return <div style={{marginBottom: "60px", textAlign: "center"}}>
        <div style={{marginBottom: '45px'}}>
            <img src="img/wreath.png" height={100} width={100}/>
            <DDay dDay={dDay}/>
        </div>
        <Calendar date={wDay}/>
    </div>;
}

export default CalendarArea;