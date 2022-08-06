import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const StyledImg = styled.img`
  margin: 2rem auto;
  width: 220px;
`;

function Header() {
  return (
    <Wrapper>
      <StyledImg src="./logo/header-logo.png" alt="header logo" />
    </Wrapper>
  );
}

export default Header;
