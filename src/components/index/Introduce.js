import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Calendar from '@c/Calendar';

const DivLine = styled.div({
    borderBottom: "1px solid #8BA5B4",
    margin: "35px 0"
});

const InviteMsg = styled.div({
    fontWeight:'bold'
},
props=>({
    "&::before": {
        content: `'`+props.text+`'`
    }
}))

const MessageComponent = styled.p(
    {
        fontSize: "15px"
    },
    props=>({
        "&::before": {
            content: `'`+props.text+`'`
        },
        whiteSpace: 'pre-line'
    })
);

const NamesStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    margin: 25px 0;
    span{
        display: block;
        margin-right: 10px;
    }
    span:last-child{
        font-weight: bold;
        font-size: 21px;
    }
`;

const NamesText = styled.span(props=>({
    "&::before": {
        content: `'`+props.text+`'`
    },
    whiteSpace: 'pre-line'
}));

const Names = ({division, father, mother, of, givenName})=>{
    return <p css={NamesStyle}>
        <NamesText text={division}/>
        <NamesText text={`${father}\\A${mother}`}/>
        <NamesText text={of}/>
        <NamesText text={givenName}/>
    </p>
}

const Introduce = ({textList, intro, wDay})=>{
    const {groom, bride} = intro;

    return <>
        <DivLine/>
        <InviteMsg text={"초대합니다"} />
        {textList.map(text=>{
            return <MessageComponent key={text}
                text={text}
            />
        })}
        <Names key={'groomNames'}
            division={groom[0]}
            father={groom[1]}
            mother={groom[2]}
            of={groom[3]}
            givenName={groom[4]}
        />
        <Names key={'brideNames'}
            division={bride[0]}
            father={bride[1]}
            mother={bride[2]}
            of={bride[3]}
            givenName={bride[4]}
        />
        <div style={{borderBottom: "1px solid #8BA5B4"}}></div>
        <Calendar date={wDay}/>
        <DivLine/>
    </>
}

export default Introduce;