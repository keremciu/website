import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: 0.6s background;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 0rem 1rem;
  }
`;

const Flex = styled.div`
  padding-top: 6rem;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5.4rem;
  right: -3.2rem;
`;

const SectionTitle = styled.h2`
  padding-top: 10rem;
  font-size: 3rem;
  letter-spacing: -0.009em;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
`;

const SectionLead = styled.p`
  color: #828282;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.27rem;
`;

export { AppContainer, Flex, Container, IconWrapper, SectionTitle, SectionLead };
