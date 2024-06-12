/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {QueryClient, QueryClientProvider} from 'react-query';
import Routes from './src/navigation/Routes';

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
