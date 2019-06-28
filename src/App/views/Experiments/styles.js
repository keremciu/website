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
  @media (max-width: 768px) {
    left: 50%;
    top: -12rem;
    margin-left: -8rem;
    svg {
      width: 16rem !important;
    }
  }
  @media (max-width: 670px) {
    margin-left: -6.8rem;
  }
  @media (max-width: 375px) {
    margin-left: -4.5rem;
  }
`;

const RepositoryTable = styled.div`
  background: lightgray;
`;

export { Wrapper, Man, RepositoryTable };
