import styled from 'styled-components';

const Wrapper = styled.div`
  transition: 0.6s all;
  background: ${props => props.theme.secondBackground};
  position: relative;
  z-index: 100;
  height: 500px;
  margin-top: 2rem;
`;

const Man = styled.div`
  position: absolute;
  top: -20rem;
  right: 15rem;
`;

const RepositoryTable = styled.div`
  color: red;
`;

export { Wrapper, Man, RepositoryTable };
