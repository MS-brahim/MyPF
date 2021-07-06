import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
const ButtonShared = (props) => {
    return (
      <View>            
          <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          >
          <Text style={{color:'#fff',fontSize:16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ButtonShared

const styles = StyleSheet.create({
    button: {
      backgroundColor: "orange",
      padding: 10,
      margin: 'auto',
      borderRadius: 10,
      alignItems: 'center',
      width:140,
      marginTop:20,
    }
});