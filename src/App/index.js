import React from 'react';

import { AppContainer } from './styles';
import Welcome from 'App/views/Welcome';
import Experiments from 'App/views/Experiments';
import Biography from 'App/views/Biography';

const App = () => (
  <AppContainer>
    <Welcome />
    <Experiments />
    <Biography />
  </AppContainer>
);

export default App;
