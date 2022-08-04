import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <StyledImg src="./logo/header-logo.png" alt="header logo" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const StyledImg = styled.img`
  margin: 2rem auto;
  width: 220px;
`;

export default Header;