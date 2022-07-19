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
    const imgRef = useRef([]);

    for(let i=0; i<imgLength; i++){
        slides.push(<SwiperSlide style={{padding: "0 10px"}} key={`img${i}`}>
            <img src={`gallery/w${i}.jpeg`} width="100%" ref={itself=> imgRef.current[i] = itself}/>
        </SwiperSlide>);
    }

    useEffect(()=>{
        setSlideHeight(getComputedStyle(imgRef.current[0]).height);
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
                    const {height} = getComputedStyle(imgRef.current[realIndex]);

                    setSlideHeight(height);
                }}
                onSwiper={(swiper) => {
                    const {slides, realIndex} = swiper;
                    setHeights(slides.map(slide=>{
                        return getComputedStyle(imgRef.current[realIndex]).height;
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