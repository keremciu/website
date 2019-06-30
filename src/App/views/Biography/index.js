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
              in the world. I believe if we share what we have/know then we can destroy the walls
              between people that's why I'm always into sharing.
            </p>
            <p>
              My curiosity led me to the world of games and development when I was a child. This
              world dragged me to be a self-taught developer who has a designer spirit inside. I
              decided to see what's best for me "Design" or "Development" that's why I studied
              Visual Communication Design as my bachelor's degree.
            </p>
            <p>
              My passion for finding solutions to complex problems and automating most of the
              repetitive tasks I had told me "man! you should be a developer." I don't have a CS
              background but I'm trying to learn fundamentals to improve my communication skills
              with my teammates.
            </p>
            <p>
              Nowadays I'm trying to call by myself as React Enthusiast and Evangelist of Design
              Standards in the professional world. In my whole career, I built many bridges between
              front-end and design. I'm a good observer about identifying the communication problems
              between people/teams. I believe if we build nice helpers/structures then working
              together will be like playing with Legos.
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
