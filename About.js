import {StyleSheet, Text, View, TouchableOpacity,Image,Button} from 'react-native';
import React from 'react';
import CommonButton from './CommonButton';

const About = ({navigation}) => {

  return (
    <View style={{backgroundColor:'gray',height:'100%'}}>
        <View>
        <Image style ={styles.aboutimage} source={require('../src/image/aboutimg.jpg')}/>
        </View>
      <TouchableOpacity>
        <Text style={styles.abouttext}>This is About Us</Text>
      </TouchableOpacity>
      {/* <View>
         <Button title="Go to Home" onPress={() => navigation.navigate('Home')}
        /> 
      </View> */}
      <CommonButton title="Go to Notification" onPress={()=> navigation.navigate('Notification',{
        // username:"Yuvraj",
        // password:12345,
        
      })}/>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
    aboutimage:{
        width:"100%",
        height:200
    },
    abouttext:{
        fontSize:30,
        color:'blue',
    }
});
