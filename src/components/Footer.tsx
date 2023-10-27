import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  padding: 10px;
  height: 110px;
  background-color: darkslateblue;
  color: white;
  display: flex;
  gap: 25px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <span>@copyright bmm</span>
            <span>all rights reversed</span>
        </StyledFooter>
    );
};

export default Footer;
