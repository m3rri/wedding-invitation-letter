import { useState } from 'react';
import Link from 'next/link';
import ReactModal from 'react-modal';
import { css } from '@emotion/react'
import styled from '@emotion/styled';
import CopyToClipboard from 'react-copy-to-clipboard';

const ModalOpenBtn = css`
  margin: 0 20px;
  padding: 13px 19px;
  font-size: 17px;
  border: 1px solid #333;
  background: rgba(255,255,255,0.3);
  border-radius: 7px;
  cursor: pointer;
`;

const modalStyle = {
    overlay: {
        background: "rgba(0,0,0,0.35)"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        height: "auto",
        width: "80%",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0"
    }
};

const ModalContent = styled.div({
    textAlign: "center",
    fontSize: "19px",
    paddingBottom: "30px",
    ".side-name": {
        width: "100%",
        background: "#efefef",
        padding: "15px 0",
        fontWeight: "bold"
    },
    ".account-button": {
        margin: "30px 80px",
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "12px 0 13px",
        cursor: "pointer",
        "&:before": {
            content: `'계좌보기👆'`
        }
    },
    ".account-area": {
        margin: "30px 0"
    },
    ".kakaoPay": {
        color: "#C47D78",
        "&:before": {
            content: `'카카오 페이 송금'`
        }
    }
},
props=>({
    display: props.display==='true' ? 'block' : 'none',
    ".side-name": {
        "&:before": {
            content: `'`+props.sideName+` 측'`
        }
    },
    ".account-button": {
        display: props.accountShow ? 'none' : 'block'
    },
    ".account-area": {
        display: props.accountShow ? 'block' : 'none'
    }
}));

const AccountWithCopy = ({bank, owner, account})=>{
    return <>
        <div css={{
            "&:before":{
                content: `'`+bank+` `+owner+`'`
            }
        }}/>
        <CopyToClipboard
            text={account.replace(/-/g,'')}
            onCopy={()=>alert(`계좌번호가\n클립보드에 복사되었습니다`)}
        >
            <div css={{
                '&:before':{
                    content: `'`+account+` '`
                },
                '&:after': {
                    content: `'복사'`,
                    background: "#efefef",
                    padding: "5px 8px",
                    borderRadius: "10px"
                }
            }}/>
        </CopyToClipboard>
    </>
}

ReactModal.setAppElement("#modal");

const SendHeart = ({groom, bride})=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [groomSide, setGroomSide] = useState(false);
    const [brideSide, setBrideSide] = useState(false);
    const [accountShow, setAccountShow] = useState(false);
    const sideNames = ["신랑", "신부"];

    const accountOpen = (idx)=>{
        setModalOpen(true);
        if(idx==0){
            setGroomSide(true);
        }else{
            setBrideSide(true);
        }
        setAccountShow(false);
        document.body.style.overflow = 'hidden';
    }

    const accountClose = ()=>{
        setModalOpen(false);
        setGroomSide(false);
        setBrideSide(false);
        document.body.style.overflow = 'unset';
    }

    const switchShowing = ()=>{
        setAccountShow(true);
    }

    return <>
      <div css={{margin: "20px", "&:before": {content: `'마음 전하실 곳'`}}}/>
      <div css={{marginBottom: "17px"}}>
        <button
            css={ModalOpenBtn}
            onClick={()=>accountOpen(0)}
        >
            <span css={{'&:before': {content: `'🤵 `+sideNames[0]+` 측'`}}}/>
        </button>
        <button
            css={ModalOpenBtn}
            onClick={()=>accountOpen(1)}
        >
            <span css={{'&:before': {content: `'👰 `+sideNames[1]+` 측'`}}}/>
        </button>
      </div>
      <div id="modal">
         <ReactModal
                isOpen={modalOpen}
                style={modalStyle}
                onRequestClose={accountClose}
        >
            <ModalContent
                display={groomSide.toString()}
                accountShow={accountShow}
                sideName={sideNames[0]}
            >
                <div className="side-name"/>
                <div
                    className="account-button"
                    onClick={switchShowing}
                />
                <div className="account-area">
                    {groom.accounts.map(account=>{
                        return <AccountWithCopy
                            key={account.owner}
                            bank={account.bank}
                            owner={account.owner}
                            account={account.account}
                        />;
                    })}
                </div>
                <Link href={`https://qr.kakaopay.com/${groom.kakao}`}>
                    <a className="kakaoPay"/>
                </Link>
            </ModalContent>
            <ModalContent
                display={brideSide.toString()}
                accountShow={accountShow}
                sideName={sideNames[1]}
            >
                <div className="side-name"/>
                <div
                    className="account-button"
                    onClick={switchShowing}
                />
                <div className="account-area">
                    {bride.accounts.map(account=>{
                        return <AccountWithCopy
                            key={account.owner}
                            bank={account.bank}
                            owner={account.owner}
                            account={account.account}
                        />;
                    })}
                </div>
                <Link href={`https://qr.kakaopay.com/${bride.kakao}`}>
                    <a className="kakaoPay"/>
                </Link>
            </ModalContent>
        </ReactModal>
      </div>
    </>;
}

export default SendHeart;