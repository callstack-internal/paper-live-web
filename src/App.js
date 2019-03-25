import React from 'react';
import { Platform, View } from 'react-native';
import { Provider, Button } from 'react-native-paper';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const code = `
  <Provider>
    <React.Fragment>
      {Platform.OS === 'web' ? (
        <style type="text/css">{\`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
      \`}</style>
      ) : null}
      <View>
        <Button icon="add-a-photo" onPress={() => console.log('pressed')}>Button</Button>
      </View>
    </React.Fragment>
  </Provider>
`;

const scope = { Platform, View, Provider, Button };

const App = () => (
  <LiveProvider code={code} scope={scope}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default App;
