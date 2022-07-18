import React, { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect';
import {css} from '@emotion/react';
import styled  from '@emotion/styled';

const progressBackStyle = ()=>css`
    position: fixed;
    top: 9px;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 20;
    @media only screen and (min-width: 480px){
        position: sticky;
    }
    span {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translate(-56%);
    }
`;

const ProgressBarBride = styled.div(
    {
        position: "absolute",
        top: 0,
        left: 0,
        width: "48%",
        height: "100%",
        backgroundColor: "rgba(196,125,120,0.7)",
        transformOrigin: "left center",
        zIndex: 30
    },
    props => ({
        transform: props.transform,
        '::after':{
            content: `'👰'`,
            position: 'absolute',
            right: '-2px',
            top: '-10px'
        }
    })
);

const ProgressBarGroom = styled.div(
    {
        position: "absolute",
        top: 0,
        right: 0,
        width: "48%",
        height: "100%",
        backgroundColor: "rgba(196,125,120,0.7)",
        transformOrigin: "right center",
        zIndex: 30
    },
    props => ({
        transform: props.transform,
        '::after':{
            content: `'🤵'`,
            position: 'absolute',
            left: '-5px',
            top: '-10px'
        }
    })
);

const ArticlesWithProgress = ({children})=>{
    let childHeightList = [];
    const [tronsformB, setTransformB] = useState("translate(-90%)");
    const [tronsformG, setTransformG] = useState("translate(90%)");
    const [emogi, setEmogi] = useState('none');

    useEffect(()=>{
        const calculateProgress = ()=>{
            const {scrollY, innerHeight} = window;
            const pageHeight = document.body.offsetHeight - innerHeight;
            const heightListClone = getSortedHeightList(childHeightList, scrollY+80);
            const scrollValueIndex = heightListClone.length === childHeightList.length 
            ? heightListClone.indexOf(scrollY+80)
            : scrollY+20 >= pageHeight
            ? heightListClone.pop()
            : heightListClone.indexOf(scrollY+80)-1;

            transformProgress(scrollValueIndex, childHeightList.length);
        }

        const calculateProgressDesktop = ()=>{
            const scrollY = document.querySelector("#__next").scrollTop;
            const pageHeight = document.querySelector("#__next").scrollHeight;
            const heightListClone = getSortedHeightList(childHeightList, scrollY+80);
            const scrollValueIndex = heightListClone.length === childHeightList.length 
            ? heightListClone.indexOf(scrollY+80)
            : scrollY >= pageHeight-1000
            ? heightListClone.pop()
            : heightListClone.indexOf(scrollY+80)-1;

            transformProgress(scrollValueIndex, childHeightList.length);
        }

        function transformProgress(scrollValueIndex, listLength){
            const percent = 100-(scrollValueIndex+1)/listLength*100;

            setTransformB(`translate(-${percent}%)`);
            setTransformG(`translate(${percent<0 ? 0 : percent}%)`);
            if(percent<=0){
                setEmogi('block');
            }else{
                setEmogi('none');
            }
        }

        if(children.length>0){
            if(isMobile){
                window.addEventListener('scroll', calculateProgress);
            }else{
                document.querySelector("#__next").addEventListener('scroll', calculateProgressDesktop);
            }

            const list = children
                        .map(({ref})=>ref.current.clientHeight,[])
                        .map((child, i, heights)=>{
                            return heights.reduce((accumulator, currentValue, currentIndex)=>{
                                if(currentIndex<=i){
                                    return accumulator+currentValue;
                                }else{
                                    return accumulator;
                                }
                            })-child;
                        });
            childHeightList = Array.from(list);
        }
    }, [childHeightList]);

    return <>
        <header css={progressBackStyle}>
            <ProgressBarBride transform={tronsformB}/>
            <ProgressBarGroom transform={tronsformG}/>
            <span style={{display: emogi}}>💞</span>
        </header>
        {children}
    </>
};

function getSortedHeightList(list, scrollY){
    let cloneList = Array.from(list);
    cloneList.push(scrollY);
    cloneList = cloneList.filter((height, i)=> cloneList.indexOf(height)===i);
    cloneList.sort((a, b)=>a-b);
    return cloneList;
}

export default ArticlesWithProgress;