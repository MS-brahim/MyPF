import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
        
    },
    loadText:{
        color:'black',
        fontSize:20
    }
});
 
class Splash extends Component {

    componentDidMount(){
        AsyncStorage.getItem('TOKEN').then((token ) => {
            if (token) {
                this.props.navigation.navigate('Home')
            } else {
                this.props.navigation.navigate('signIn')
            }
        })
    }

    render() { 
        return (
            <View style={styles.container}>
                <ActivityIndicator size={22} color={'black'}/>
                <Text style={styles.loadText} >Loading...</Text>
            </View>
        );
    }
}
 
export default Splash;