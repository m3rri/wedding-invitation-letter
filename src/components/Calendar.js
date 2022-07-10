import styled from '@emotion/styled';
import {css} from '@emotion/react';
import DayName from 'components/comm/DayName';

const DivMonth = styled.div(
    {
        margin: "10px 0"
    },
    props=>({
        "&::before": {
            content: `'`+props.mm+`월'`
        }
    })
);

const CalendarWrapper = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    fontSize: "15px"
});

const DivDate = styled.div(
    {
        justifyContent: "center",
        alignItems: "center",
        margin: "8px 10px"
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
    margin: 0 1px;
    font-weight: bold;
`;

const dataFormat = date=>{
    return [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate()
    ];
}

const Calendar = ({date})=>{
    const [yyyy, mm, dd] = dataFormat(date);
    let dayNames = [];
    let lastDays = [];
    let thisDays = [];
    let nextDays = [];
    const lastDayOfPrevMonth = new Date(yyyy, mm-1, 0).getDay();
    const lastDateOfThisMonth = dataFormat(new Date(yyyy, mm, 0)).pop()*1;
    let lastDaysOfSquare = (lastDayOfPrevMonth+1)+lastDateOfThisMonth;
    lastDaysOfSquare = (Math.ceil(lastDaysOfSquare/7)*7)-(lastDaysOfSquare+1);

    dayNames = DayName.map(name=><DivDate key={name} date={name.substring(0,1)}/>);
    
    for(let i=0; i<=lastDayOfPrevMonth; i++){
        lastDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }

    for(let i=0; i<lastDateOfThisMonth; i++){
        if(i+1==dd){
            thisDays.push(<DivDate key={`this-${i}`} date={i+1} css={ThisDate}/>);
        }else{
            thisDays.push(<DivDate key={`this-${i}`} date={i+1}/>);
        }
    }

    for(let i=0; i<=lastDaysOfSquare; i++){
        nextDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }
    
    return <div css={{
        background: "rgba(196,125,120,0.15)",
        padding: "5px",
        borderRadius: "10px",
        marginTop: "20px"
    }}>
        <DivMonth mm={mm}/>
        <CalendarWrapper>
            {dayNames}
            {lastDays}
            {thisDays}
            {nextDays}
        </CalendarWrapper>
    </div>;
}

export default Calendar;