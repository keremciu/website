import React from 'react';

import { AppContainer } from './styles';
import Welcome from 'App/views/Welcome';
import Biography from 'App/views/Biography';
import Notes from 'App/views/Notes';

const App = () => (
  <AppContainer>
    <Welcome />
    <Biography />
    <Notes />
  </AppContainer>
);

export default App;
