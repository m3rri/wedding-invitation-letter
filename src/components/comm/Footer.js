import styled from '@emotion/styled';

const FooterStyled = styled.footer(
    {
        display: "flex",
        flex: 1,
        padding: "10px 0",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        fontSize: "11px",
        fontWeight: 'bold',
        color: "#333"
    },
    props=>({
        '::before': {
            content: `'`+props.text+`'`
        }
    })
)

const Footer = ()=>{
    return <FooterStyled text={'©2022 Kim Hye Ri. All rights reserved.'}/>
}

export default Footer;