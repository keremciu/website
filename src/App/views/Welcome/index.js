import React, { Fragment } from 'react';

import { Container } from 'App/styles';
import {
  Title,
  Navigation,
  SubText,
  OperationText,
  IconWrapper,
  IconLink,
  LightSwitch,
  SwitchBubble,
  Cloud,
  MobileSaver,
} from './styles';
import Icon from 'App/components/Icon';
import { useTheme } from 'utils/ThemeContext';

const Welcome = () => {
  const { toggle, dark } = useTheme();
  return (
    <Fragment>
      <LightSwitch onClick={() => toggle()} title="oh! time to play with colors?">
        <SwitchBubble dark={dark}>
          <Cloud dark={dark} />
        </SwitchBubble>
      </LightSwitch>
      <Container>
        <Title>
          I’m a Berlin based Javascript develöper who loves{' '}
          <span title="nah, it's not pokemon go!">nature and games.</span>
        </Title>
        <Navigation>
          <SubText>KEEP SCROLLING</SubText>
          <OperationText>OR</OperationText>
          <SubText>JUST JUMP TO</SubText>
          <MobileSaver>
            <IconLink href="https://github.com/keremciu/" target="_blank" rel="noopener noreferrer">
              <Icon type="github" title="my GitHub profile" />
            </IconLink>
            <IconLink
              href="https://twitter.com/keremciu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="twitter" title="my Twitter profile" />
            </IconLink>
            <IconLink
              href="https://medium.com/@keremciu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="medium" title="my Medium profile" />
            </IconLink>
          </MobileSaver>
        </Navigation>
      </Container>
      <IconWrapper>
        <Icon type="garden" width="670" height="498" viewBox="0 0 745 554" />
      </IconWrapper>
    </Fragment>
  );
};

export default Welcome;
