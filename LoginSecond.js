import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function LoginSecond({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  
  const goToServiceScreen = () => {
    navigation.navigate('Service',{
     Obj:[
      {UserName:name},
     { UserEmail:email},
      {UserPassword:password}
     ]
    });
    return(
      <View>
        
      </View>
    )
  }
  
  
  return (
    <View style={{flex: 1, backgroundColor: '#1B2732',marginTop:-100}}>
      <View>
        <Image style={Lstyle.logo} source={require('../../image/Logo.png')} />
      </View>
      <Text style={Lstyle.logint}>Create Account</Text>
      <View style={{opacity: 0.5}}>
      
                  
        <TextInput
          placeholderTextColor="white"
          style={Lstyle.pinput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          />
        <TextInput
          placeholderTextColor="white"
          style={Lstyle.pinput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          />
       
       <TextInput
          position='relative'
            placeholderTextColor="white"
            style={Lstyle.pinput}
            placeholder="Password"
            secureTextEntry={showPassword}
            onChangeText={(text) => setPassword(text)}
          />

          <Button title="Submit" 
        onPress={() => goToServiceScreen()} color="green" />

          <Icon style={Lstyle.eye} onPress={() => setShowPassword(!showPassword)} name={showPassword ? 'eye-off' : 'eye'} color={'gray'} size={30} />
      </View>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Home')} style={Lstyle.signup}>
          SIGN UP
        </Text>
      </TouchableOpacity>
      <Text style={Lstyle.lline}>
        <Text style={Lstyle.account}>Already have an account?</Text>
        <Text style={Lstyle.account1}> Login</Text>
        
      </Text>
    </View>
  );
  }
export default LoginSecond;
const Lstyle = StyleSheet.create({
  logo: {
    marginTop: 200,
    marginLeft: 155,
    marginBottom: 25,
    width: 90,
    height: 120,
  },
  logint: {
    fontSize: 24,
    textAlign: 'center',
    color: '#039F79',
    fontWeight: 'bold',
  },

  fline: {
    color: 'white',
    margin: 15,
    textAlign: 'center',
  },
  signup: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 60,
    width: 300,
    height: 50,
    borderColor: 'None',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 4,
    alignSelf:'center',
    borderWidth: 1,
    backgroundColor: '#00B386',
    color: 'white',
    padding: 12,
  },
  pinput: {
    fontSize: 18,
    borderWidth: 1.5,
    borderColor: 'white',
    marginTop: 30,
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 3,
    paddingLeft: 15,
    color: 'white',
    width: 300,
  },
  account: {
    color: 'white',
  },
  account1: {
    color: '#00b386',
    fontWeight: 'bold',
  },
  lline: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  eye:{
    position:'absolute',
    marginTop:200,
    marginLeft:290,
  }
});
{
  /*
//import {LoginSecond} from './src/pages';
import React from 'react';
import {StyleSheet} from 'react-native';
//import { Login, LoginSecond } from './src/pages';
//import Contact from './src/pages';
import Home from './src/Home';
import About from './src/About';
import Service from './src/Service';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="LoginSecond" component={LoginSecond} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//  <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
      
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Service" component={Service} />
//       </Stack.Navigator>
//     </NavigationContainer> 

    <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Service" component={Service} />
    </Tab.Navigator>
    
  );
}

export default App;

const styles = StyleSheet.create({});*/
}
