 import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/Navigation/StackMergeFun';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default App;



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Form from './src/pages/Form'

// const App = () => {
//   return (
//     <View>
//       <Form/>
//     </View>
    
//   )
// }

// export default App

// const styles = StyleSheet.create({})
