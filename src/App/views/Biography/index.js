import React from 'react';

import { SectionTitle, SectionLead, Flex, Container } from 'App/styles';
import { Wrapper, TextColumns } from './styles';
import { Man } from '../Experiments/styles';
import Icon from 'App/components/Icon';

import { useTheme } from 'utils/ThemeContext';

const Biography = () => {
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
        <SectionTitle>Biography</SectionTitle>
        <SectionLead>LIFELONG LEARNER</SectionLead>
        <Flex>
          <TextColumns>
            <p>
              I consider myself as a{' '}
              <a
                href="https://twitter.com/PsychdelicPics/status/1143650481022984192"
                target="_blank"
                rel="noopener noreferrer"
              >
                refugee
              </a>{' '}
              in the world. I’m always into sharing what I've to build a connection between people.
            </p>
            <p>
              My curiosity led me to the world of games and development when I was a child. I'm a
              self-taught developer who has a designer spirit inside. I studied Visual Communication
              Design as my bachelor's degree to understand what’s best for me “Design” or
              “Development”.
            </p>
            <p>
              My passion for finding solutions to complex problems and automating repetitive tasks
              told me "man! you should be a developer." I don't have a CS background that's why I'm
              trying to learn fundamentals to improve my communication with my teammates.
            </p>
            <p>
              Nowadays I'm trying to call by myself as React Enthusiast and Evangelist of Design
              Standards in the professional world. In my whole career, I built many bridges between
              teams. I believe I'm a good observer who identifies the communication problems between
              people/teams. I believe if we build nice helpers/structures then working together will
              be like playing with Legos.
            </p>
            <p>
              <a rel="license noopener noreferrer" href="http://kerem.ws/cv" target="_blank">
                My career? You can grab my cv here.
              </a>
            </p>
            <p>
              On the social side, I feel like a mixture of an artist and developer, you can find me
              trying to be a spiritual guy on a table full of rational people.
            </p>
            <p>
              <a
                rel="license noopener noreferrer"
                href="https://www.instagram.com/keremciu/"
                target="_blank"
              >
                As a person? You can stalk my Instagram here.
              </a>
            </p>
          </TextColumns>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Biography;
