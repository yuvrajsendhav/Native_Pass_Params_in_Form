import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const Notification = ({route, navigation}) => {
  const { username,password,message} = route?.params;
  console.log(username,password);
  return (
    <View>
    <View>
      <Image style ={styles.notificationimage} source={require('./image/notification.webp')}/>
      </View>
      
        <Text style={styles.notificationtext}>You hava a Notification</Text>
        <Text>{route.params.message}</Text>
      <Text>{username}</Text>
      <Text>{password}</Text>
      
      </View>
  )
}
export default Notification

const styles = StyleSheet.create({
  
    notificationimage:{
      width:"100%",
      height:600
  },
  notificationtext:{
      fontSize:30,
      color:'blue',
  }
})