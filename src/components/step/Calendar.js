/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DefaultCalendar from "../atom/Calendar";
import { W_DAY, W_DAY_FOR_D_DAY } from "../../resource/Date";

const TODAY = new Date();
const [yyyy, mm, dd] = [TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()];
const D_DAY = Math.floor((W_DAY_FOR_D_DAY - new Date(yyyy, mm, dd, 0, 0))/(1000*60*60*24));

const dDay = css`
    margin: 50px 0 30px;
    span{
        position: absolute;
        left: 50%;
        font-weight: normal;
        font-style: normal;
        background-size: 100px 100px;
        line-height: 100px;
        transform: translate(-50%,0%);
        letter-spacing: 0.1rem;
        &:before{
            content: 'D${D_DAY<0 ? '+' : '-'}${D_DAY < 0 ? D_DAY*(-1) : D_DAY}'
        }
    }
`;

const Calendar = ()=>{
    return <div css={css`margin-bottom:30px;`}>
        <div css={dDay}>
            <img
                src={`${process.env.PUBLIC_URL}/asset/wreath.png`}
                height={100} width={100}
                alt="d-day wrapper"
            />
            <span></span>
        </div>
        <DefaultCalendar date={W_DAY}/>
    </div>;
}

export default Calendar;