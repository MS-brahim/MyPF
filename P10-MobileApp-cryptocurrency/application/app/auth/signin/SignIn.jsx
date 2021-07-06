import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    Image
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavWarinigShared from "../../components/shared/NavWarningShared";
import SocialButton from "../../components/SocialButtonComponent";
import Input from "../../components/shared/InputShared";
import ButtonShared from "../../components/shared/ButtonShared";

import firebase from '../../../Config'
import axios from "axios";
const apiUrl = 'https://cryptoccapi.herokuapp.com/api/v1/'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1,
    },
});

const SignIn = (props) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function onLoginPressed  () {
        try {
            if (email=='') {
                Alert.alert('Address e-mail is required');
            } else if(password==''){
                Alert.alert('password is required');
            } else {
                firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
                    const iduser = res.user.uid
                    // console.log(iduser);
                    AsyncStorage.setItem('TOKEN', res.user.refreshToken)
                    AsyncStorage.setItem('UID', iduser)
                    axios.post(apiUrl+'user/create',{
                        id: res.user.uid
                    }).then((ress)=>{
                        console.log(ress.data);
                    })
                    props.navigation.navigate('Home')
                })
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    function navigateToSignUp() {
        props.navigation.navigate('signUp')
    }

    return (
        <ScrollView style={styles.container}>
            <NavWarinigShared text='Sign in'/>
            <View style={{ alignItems:'center', marginTop:-40}}>
                <Image source={require(`../../../assets/signin.png`)} style={{width:200, height:200, zIndex:1}} />
            </View>
            <View style={{margin:30, zIndex:1}}>
                <Input
                    placeholder='E-mail...'
                    secureTextEntry={false}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <View style={{alignItems:'center'}}>
                    <ButtonShared text='Connection' onPress={()=>{onLoginPressed()}}/>
                </View>
                <Text style={{color:'orange',alignSelf:'center', marginVertical:15, fontSize:16}}>Or Sign in with</Text>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <SocialButton 
                        title='Se Connecter avec GitHub'
                        btnType='github'
                        backgroundColor="black"
                    />
                    <SocialButton 
                        title='Se Connecter avec Facebook'
                        btnType='facebook'
                        backgroundColor="#3b5999"
                        onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}

                    />
                    <SocialButton 
                        title='Se Connecter avec Twitter'
                        btnType='twitter'
                        backgroundColor="#55acee"
                    />
                </View>
                    <View style={{ alignItems:'center', marginVertical:20}}>
                        <Text style={{fontSize:15}}>Don't have an account ?</Text>
                        <Text style={{color:'orange', fontSize:16,}}
                            onPress={()=>navigateToSignUp()}
                        >Create account </Text>
                    </View>
            </View>
        </ScrollView>
    );
}

export default SignIn;
