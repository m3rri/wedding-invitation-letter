import styled from '@emotion/styled';
import {css} from '@emotion/react';
import DayName from 'components/comm/DayName';

const DivMonth = styled.div(
    {
        margin: "10px 0"
    },
    props=>({
        "&::before": {
            content: `'`+props.month+`'`
        }
    })
);

const CalendarWrapper = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    fontSize: "15px",
    margin: "0 33px"
});

const DivDate = styled.div(
    {
        justifyContent: "center",
        alignItems: "center",
        margin: "5px"
    },
    props=>({
        "&::before": {
            content: `'`+props.date+`'`
        }
    })
);

const ThisDate = css`
    background: #F5CAA4;
    color: #FFF;
    padding: 7px 0 8px;
    border-radius: 29px;
    margin: 0 4px;
    font-weight: bold;
`;

const dataFormat = date=>date.toLocaleDateString().replace(/\./g, '').split(' ');

const Calendar = ({date})=>{
    const [year, month, _date] = dataFormat(date);
    let dayNames = [];
    let lastDays = [];
    let thisDays = [];
    let nextDays = [];
    const lastDayOfPrevMonth = new Date(year, month-1, 0).getDay();
    const lastDateOfThisMonth = dataFormat(new Date(year, month, 0)).pop()*1;
    let lastDaysOfSquare = (lastDayOfPrevMonth+1)+lastDateOfThisMonth;
    lastDaysOfSquare = (Math.ceil(lastDaysOfSquare/7)*7)-(lastDaysOfSquare+1);

    dayNames = DayName.map(name=><DivDate key={name} date={name.substring(0,1)}/>);
    
    for(let i=0; i<=lastDayOfPrevMonth; i++){
        lastDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }

    for(let i=0; i<lastDateOfThisMonth; i++){
        if(i+1==_date){
            thisDays.push(<DivDate key={`this-${i}`} date={i+1} css={ThisDate}/>);
        }else{
            thisDays.push(<DivDate key={`this-${i}`} date={i+1}/>);
        }
    }

    for(let i=0; i<=lastDaysOfSquare; i++){
        nextDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }
    
    return <>
        <DivMonth month={`${month}월`}/>
        <CalendarWrapper>
            {dayNames}
            {lastDays}
            {thisDays}
            {nextDays}
        </CalendarWrapper>
    </>;
}

export default Calendar;