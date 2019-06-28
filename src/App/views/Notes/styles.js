import styled from 'styled-components';

import { Flex } from 'App/styles';

const Wrapper = styled.div`
  transition: 0.6s all;
  background: ${props => props.theme.background};
  position: relative;
  z-index: 100;
  @media (max-width: 768px) {
    ${Flex} {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      text-align: center;
      flex-direction: column;
      p {
        margin: 0.5rem 0;
      }
    }
  }
`;

export { Wrapper };
