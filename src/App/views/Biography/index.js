import React from 'react';

import { SectionTitle, SectionLead, Flex, Container } from 'App/styles';
import { Wrapper, TextColumns } from './styles';

const Biography = () => (
  <Wrapper>
    <Container>
      <SectionTitle>Biography</SectionTitle>
      <SectionLead>LIFELONG LEARNER</SectionLead>
      <Flex>
          <TextColumns>
          <p>
      I consider myself as a <a href="https://twitter.com/PsychdelicPics/status/1143650481022984192" target="_blank" rel="noopener noreferrer">refugee</a> in the world. I’m always into sharing what I’ve/I learned. 
      </p>
      <p>
My curiosity led me to the world of games and development when I was child. I'm a self-taught programmer who has a designer spirit inside. I studied Visual Communication Design as my bachelor's degree to understand what’s best for me “Design” or “Development”.
</p>
<p>
My love for finding solutions to complex problems and automating repetitive tasks told me I need to be a developer.
</p>
<p>Nowadays I'm trying to call by myself as React Enthusiast and Evangelist of Design Standarts in the professional world. In my whole career I built many bridges between teams. I consider myself as a good observer who identifies the communication problems between people/teams. I believe if we build nice helpers/structures then working together will be like playing with legos.</p>
        </TextColumns>
      </Flex>
    </Container>
  </Wrapper>
);

export default Biography;
