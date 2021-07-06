import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function NavWarinigShared(props) {
    return (
        <View style={styles.bgHead}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bgHead : {
        height:100,
        width:'100%',
        backgroundColor: 'orange',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    }
});