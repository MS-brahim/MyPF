import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
 
const styles = StyleSheet.create({
    input: {
        height: 44,
        padding:10,
        borderWidth:1,
        borderColor:'orange',
        marginTop:20,
        borderRadius:10,
        fontSize:16
    },
});
 
const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            placeholderTextColor="orange"
        />
    );
}

 
export default Input;