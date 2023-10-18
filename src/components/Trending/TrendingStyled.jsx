import styled from 'styled-components';
export const Wrapper = styled.div`
  padding-top: 10px;
`;
export const List = styled.ul`
  /* margin-top: 20px; */
  padding-left: 10px;
  height: 100vh;
`;
export const ListItem = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  * {
    font-size: 1em;
    font-family: sans-serif;
    color: #2b503a;
    font-weight: 500;
    &:hover {
      color: red;
    }
  }
`;
export const Paragraph = styled.p`
  padding-top: 10px;
  padding-bottom: 20px;
`;
export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
`;
