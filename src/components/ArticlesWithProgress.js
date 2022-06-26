import React, { useEffect, useState } from 'react';
import {css} from '@emotion/react';
import styled  from '@emotion/styled';

const progressBackStyle = ()=>css`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
`;

const ProgressBar = styled.div(
    {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#777",
        transformOrigin: "left center",
    },
    props => ({
        transform: props.transform
    })
);

const ArticlesWithProgress = ({children})=>{
    let childHeightList = [];
    const [tronsform, setTransform] = useState("scaleX(0)");

    useEffect(()=>{
        const transformProgress = ()=>{
            const {scrollY, innerHeight} = window;
            const pageHeight = document.body.offsetHeight - innerHeight;
            const heightListClone = getSortedHeightList(childHeightList);
            const scrollValueIndex = heightListClone.length === childHeightList.length 
            ? heightListClone.indexOf(scrollY)
            : scrollY+20 >= pageHeight
            ? heightListClone.pop()
            : heightListClone.indexOf(scrollY)-1;
            const percent = childHeightList[scrollValueIndex]/pageHeight;

            setTransform(`scaleX(${percent})`);
        }

        if(children.length>0){
            window.addEventListener('scroll', transformProgress);

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
            <ProgressBar transform={tronsform}/>
        </header>
        {children}
    </>
};

function getSortedHeightList(list){
    let cloneList = Array.from(list);
    cloneList.push(scrollY);
    cloneList = cloneList.filter((height, i)=> cloneList.indexOf(height)===i);
    cloneList.sort((a, b)=>a-b);
    return cloneList;
}

export default ArticlesWithProgress;