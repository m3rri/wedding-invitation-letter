import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const InviteMsg = styled.div({
    fontWeight:'bold',
    margin: "50px 0 30px"
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
    font-size: 17px;
    margin: 15px 0 15px;
    span{
        display: block;
        margin-right: 8px;
    }
    span:nth-child(4){
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

const Names = ({division, father, mother, of, givenName, phone})=>{
    return <p css={NamesStyle}>
        <NamesText text={division}/>
        <NamesText text={`${father}, ${mother}`}/>
        <NamesText text={of}/>
        <NamesText text={givenName}/>
        <a css={{
            border: "0",
            background: "rgba(255,255,255,0)",
            fontSize: "19px",
            padding: "0"
        }} href={`sms:${phone}`}>💌</a>
    </p>
}

const CallButton = ({openModal})=>{
    return <button css={{
        background: "rgba(255,255,255,0.2)",
        border: "1px solid #333",
        borderRadius: "10px",
        fontSize: "15px",
        padding: "9px 15px",
        margin: "10px 0 50px",
        cursor: "pointer",
        "&:before": {
            content: `'혼주에게 연락하기'`
        }
      }}
      onClick={openModal}
    />;
}

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
}

const ModalHeader = styled.div({
    width:"100%",
    background: "#efefef",
    textAlign: "center",
    fontSize: "19px",
    padding: "15px 0",
    fontWeight: "bold",
    "&:before": {
        content: `'혼주에게 연락하기'`
    }
});

const ModalWrapper = styled.div({
    fontSize: "21px",
    padding: "25px 10px",
    textAlign: "center",
    ".divide": {
        borderBottom: "1px solid #333",
        margin: "25px 40px"
    }
});

const ModalField = styled.div({
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
    "div" :{
        flex: "auto"
    },
    "div:nth-child(2)":{
        fontWeight: "bold"
    }
},
props=>({
    "div:nth-child(1)::before": {
        content: `'`+props.sideName+`'`
    },
    "div:nth-child(2)::before":{
        content: `'`+props.profileName+`'`
    }
}));

const ModalContent = ({sideName, profile})=>{
    return <ModalField
        sideName={sideName}
        profileName={profile.name}
    >
        <div/>
        <div/>
        <div>
            <a href={`tel:${profile.phone}`}>📞</a>
        </div>
    </ModalField>
}

ReactModal.setAppElement("#modal");

const Introduce = ({textList, intro})=>{
    const [modalOpen, setModalOpen] = useState(false);
    const {groom, bride} = intro;
    const openModal = ()=>{
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = ()=>{
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    }

    return <>
        <InviteMsg text={"초대합니다"} />
        {textList.map(text=>{
            return <MessageComponent key={text}
                text={text}
            />
        })}
        <Names key={'groomNames'}
            division={groom[0]}
            father={groom[1].name}
            mother={groom[2].name}
            of={groom[3]}
            givenName={groom[4].name}
            phone={groom[4].phone}
        />
        <Names key={'brideNames'}
            division={bride[0]}
            father={bride[1].name}
            mother={bride[2].name}
            of={bride[3]}
            givenName={bride[4].name}
            phone={bride[4].phone}
        />
        <div>
            <CallButton openModal={openModal}/>
        </div>
        <div id="modal">
            <ReactModal
                isOpen={modalOpen}
                style={modalStyle}
                onRequestClose={closeModal}
            >
                <ModalHeader/>
                <ModalWrapper>
                    <ModalContent sideName={`${groom[0]} 아버지`} profile={groom[1]}/>
                    <ModalContent sideName={`${groom[0]} 어머니`} profile={groom[2]}/>
                    <div className="divide"/>
                    <ModalContent sideName={`${bride[0]} 아버지`} profile={bride[1]}/>
                    <ModalContent sideName={`${bride[0]} 어머니`} profile={bride[2]}/>
                </ModalWrapper>
            </ReactModal>
        </div>
    </>
}

export default Introduce;