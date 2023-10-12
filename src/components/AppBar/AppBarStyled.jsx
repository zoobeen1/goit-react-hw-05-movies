import styled from 'styled-components';

export const AppBarStyled = styled.nav`
  /* margin-top: 20px; */
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    padding-right: 5px;
    &:hover {
      color: red;
    }
    &.active {
      color: red;
    }
  }
`;
