import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icons from 'react-native-vector-icons/Ionicons';
import CommonButton from './CommonButton';
import { useRoute } from '@react-navigation/native';
const Home = ({navigation}) => {
  const route = useRoute();
  
  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <View>
        <Image
          style={styles.homeimage}
          source={require('../src/image/home.jpg')}
        />
      </View>
      <Text style={styles.header}>This is Home Page</Text>
      {/* <View>
        <Button title='Go to About' onPress={()=> navigation.navigate('About')}/>
      </View> */}
      <CommonButton
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeimage: {
    width: '100%',
    height: 300,
  },
  header: {
    color: 'purple',
    fontSize: 29,
    marginTop: 50,
    textAlign: 'center',
  },
  navbar1: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 50,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    padding: 7,
    fontFamily: 'bold',
    borderRadius: 5,
  },
  navtxt1: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'bold',
  },
  navbar2: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 90,
    backgroundColor: 'gray',
    width: 100,
    height: 40,
    padding: 7,
    fontFamily: 'bold',
    borderRadius: 5,
  },
  navtxt2: {
    fontSize: 20,
    fontFamily: 'bold',
    color: 'white',
  },
});
