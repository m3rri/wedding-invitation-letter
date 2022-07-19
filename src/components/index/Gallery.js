import {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const SwiperWrapper = styled.div({
    width:"100%",
    objectFit: "cover",
    marginBottom: '25px'
},
props=>({
    height: props.height,
    ".swiper-wrapper":{
        height: props.height
    }
}));

const navigationCss = css`
    .swiper>.swiper-button-prev,
    .swiper>.swiper-button-next{
        color: #333;
    }
    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after,
    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
        font-size: 1.5em;
    }
    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
        content: '◀';
    }
    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
        content: '▶';
    }
`;

const Gallery = ()=>{
    const [slideHeight, setSlideHeight] = useState();
    const [heights, setHeights] = useState([]);

    const imgLength = 5;
    let slides = [];
    const refs = [];

    for(let i=0; i<imgLength; i++){
        refs.push(useRef());
        slides.push(<SwiperSlide style={{padding: "0 10px"}} key={`img${i}`}>
            <img src={`gallery/w${i}.jpeg`} width="100%" ref={refs[i]}/>
        </SwiperSlide>);
    }

    useEffect(()=>{
        setSlideHeight(getComputedStyle(refs[0].current).height);
    }, []);

    return <>
        <div css={{margin: "20px 0 30px", letterSpacing: "0.3em"}}>
            Gallery
        </div>
        <SwiperWrapper css={navigationCss} height={slideHeight}>
            <Swiper
                spaceBetween={50}
                modules={[Navigation]}
                slidesPerView={1}
                navigation={true}
                scrollbar={{ draggable: true }}
                onSlideChange={(swiper) => {
                    const {realIndex} = swiper;
                    const {height} = getComputedStyle(refs[realIndex].current);

                    setSlideHeight(height);
                }}
                onSwiper={(swiper) => {
                    const {slides, realIndex} = swiper;
                    setHeights(slides.map(slide=>{
                        return getComputedStyle(refs[realIndex].current).height;
                    }));
                    setSlideHeight(window.getComputedStyle(slides[realIndex]).height);
                }}
            >  
                {slides}
            </Swiper>
        </SwiperWrapper>
    </>;
}

export default Gallery;