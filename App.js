import {StatusBar, View, Text} from 'react-native';
import React from 'react';
import DefaultDropdown from './src/Dropdown';
const App = () => {
  return (
    <View style={{padding: 8}}>
      <StatusBar backgroundColor="grey" />
      <Text style={{fontWeight: 700, fontSize: 18}}>Dropdown</Text>
      <DefaultDropdown />
    </View>
  );
};

export default App;
