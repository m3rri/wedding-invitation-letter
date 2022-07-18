import {useState} from 'react';
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
        font-size: 1em;
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

    for(let i=0; i<imgLength; i++){
        slides.push(<SwiperSlide style={{padding: "0 40px"}} key={`img${i}`}>
            <img src={`gallery/w${i}.jpeg`} width="100%"/>
        </SwiperSlide>);
    }

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
                    setSlideHeight(heights[realIndex]);
                }}
                onSwiper={(swiper) => {
                    const {slides, realIndex} = swiper;
                    setHeights(slides.map(slide=>{
                        return window.getComputedStyle(slide).height;
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