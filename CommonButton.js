import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CommonButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.main}>
            <Text style={styles.txt}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    main:{
        backgroundColor:'red',
        padding:10,
        alignItems:'center',
        width:'40%',
        alignSelf:'center',
        borderRadius:5,
    },
    txt:{
        fontSize:18,
        color:'white',
    }
})