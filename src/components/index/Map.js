import styled from '@emotion/styled';
import {css} from '@emotion/react';

const Title = styled.div(
    {
        margin: "40px 0 10px",
        fontWeight: "bold"
    },
    props=>({
        "&::before": {
            content: `'`+props.text+`'`
        }
    })
);
const Site = styled.p(props=>({
    "&::before": {
        content: `'`+props.text+`'`
    }
}));

const MapTitle = ()=>{
    return <>
        <Title text={'오시는 길'} />
        <Site text={'웨딩스퀘어 강변점 3층 베니르홀'} />
    </>
}

export {MapTitle};