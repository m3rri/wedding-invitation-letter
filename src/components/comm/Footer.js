import styled from '@emotion/styled';

const FooterStyled = styled.footer(
    {
        display: "flex",
        flex: 1,
        padding: "10px 0",
        justifyContent: "center",
        alignItems: "center",
        background: "#D3F2D9",
        fontSize: "11px",
        color: "#333"
    }
)

const Footer = ()=>{
    return <FooterStyled>
        ©2022 Kim Hye Ri. All rights reserved.
    </FooterStyled>
}

export default Footer;