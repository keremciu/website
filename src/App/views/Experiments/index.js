import React from 'react';

import { SectionTitle, SectionLead, Flex, Container } from 'App/styles';
import { Wrapper, Man, RepositoryTable } from './styles';
import Icon from 'App/components/Icon';

import { useTheme } from 'utils/ThemeContext';

const Experiments = () => {
  const themeState = useTheme();
  return (
    <Wrapper>
      <Man>
        <Icon
          type={themeState.dark ? 'guy-dark' : 'guy-light'}
          width="242"
          height="449"
          viewBox="0 0 242 449"
        />
      </Man>
      <Container>
        <SectionTitle>Experiments</SectionTitle>
        <SectionLead>BRIDGE DEVELOPER</SectionLead>
        <Flex>
          <RepositoryTable>REPOSITORY</RepositoryTable>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Experiments;
