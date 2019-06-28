import React from 'react';

import { Flex, Container } from 'App/styles';
import { Wrapper } from './styles';

const Notes = () => (
  <Wrapper>
    <Container>
      <Flex>
        <p>
          © 2019 Kerem Sevencan. Made in Berlin with{' '}
          <span role="img" aria-label="heart">
            💖
          </span>
        </p>
        <p>
          <a
            rel="license noopener noreferrer"
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            <img
              src="https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5c09ea45b3ca08312ddafabd_creative_commons.png"
              alt="Creative Commons License"
              style={{ verticalAlign: 'bottom' }}
            />
          </a>
          Used{' '}
          <a href="https://www.humaaans.com/" target="_blank" rel="noopener noreferrer">
            humaaans
          </a>{' '}
          library to create my own illustration.
        </p>
      </Flex>
    </Container>
  </Wrapper>
);

export default Notes;
