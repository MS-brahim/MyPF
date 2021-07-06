import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const styles = StyleSheet.create({
    SocialBtn: {
        marginHorizontal:10,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height:44,
    }
});
 
const SocialButton = ({ btnType, backgroundColor}) => {
    return (
        <TouchableOpacity style={[styles.SocialBtn, {backgroundColor}]}>
            <View>
                <Icon name={btnType} size={30} color='white'></Icon>
            </View>
        </TouchableOpacity>
    );
}
 
export default SocialButton;