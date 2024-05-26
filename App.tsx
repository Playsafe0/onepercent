

import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { PaperProvider } from 'react-native-paper';

import RootNavigation from './src/rootNavigation';
import RootStore from './src/store/rootStore';


function App(): React.JSX.Element {
  enableScreens();

  return (
    <Provider store={RootStore}>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;
