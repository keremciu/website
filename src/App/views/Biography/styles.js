import styled from 'styled-components';

const Wrapper = styled.div`
  transition: 0.6s all;
  background: ${props => props.theme.secondBackground};
  position: relative;
  z-index: 100;
  margin-top: 2rem;
`;

const TextColumns = styled.div`
  text-align: justify;
  column-width: 50%;
  -webkit-column-gap: calc(24px + 4%);
  column-gap: calc(24px + 4%);
  -webkit-column-rule: 1px dotted rgba(0, 0, 0, 0.075);
  column-rule: 1px solid rgba(0, 0, 0, 0.075);
  margin-bottom: 36px;
  column-count: 2;
  p:first-child {
    margin: 0;
  }
  @media (max-width: 600px) {
    column-width: 100%;
    column-count: 1;
  }
`;

export { Wrapper, TextColumns };
