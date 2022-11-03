import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Service = ({route, navigation}) => {
  const {Obj} = route?.params;
  return (
    <View>
        <View>
        <Image style ={styles.serviceimage} source={require('../src/image/serviceimg.jpg')}/>
        </View>
      <TouchableOpacity>
        <Text style={styles.servicetext}>Our Services</Text>
      </TouchableOpacity>
      {/* <Text >User Name is : {route.params.UserName}</Text>
      
      <Text >User Password is : {route.params.UserPassword}</Text> */}
      <Text >User Name is : {route.params.Obj[0].UserName}</Text>
      <Text >User Email is : {route.params.Obj[1].UserEmail}</Text>
    <FlatList
      data={Obj}
      renderItem={({item}) => {
        return <Text>{item.UserName} {item.UserEmail} {item.UserPassword}</Text>
      }}
    />
     </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  serviceimage: {
    width: '100%',
    height: 230,
  },
  servicetext: {
    fontSize: 30,
    color: 'blue',
  },
});
