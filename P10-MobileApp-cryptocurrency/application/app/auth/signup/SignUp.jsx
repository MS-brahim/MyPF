import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

import NavWarinigShared from "../../components/shared/NavWarningShared";
import SocialButton from "../../components/SocialButtonComponent";
import Input from "../../components/shared/InputShared";
import ButtonShared from "../../components/shared/ButtonShared";
import axios from 'axios'
import firebase from '../../../Config'
const apiUrl = 'https://cryptoccapi.herokuapp.com/api/v1/'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1,
    },
});

const SignUp = (props) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function onLoginPressed  () {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
                console.log(res);
                axios.post(apiUrl+'user/create',{id:res.user.uid}).then((result) => {
                    console.log(result)
                    navgateToSignIn();
                }).catch((err) => {
                    console.log(err)
                });

            })
        } catch (err) {
            console.log(err.message);
        }
    }

    function navgateToSignIn() {
        props.navigation.navigate('signIn')
    }

    return (
        <ScrollView style={styles.container}>
            <NavWarinigShared text='Sign up'/>
            <View style={{ alignItems:'center', marginTop:-40}}>
                <Image source={require(`../../../assets/signup.png`)} style={{width:200, height:200, zIndex:1}} />
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
                    <ButtonShared text='Inscrire' onPress={()=>{onLoginPressed()}}/>
                </View>
                <Text style={{color:'orange',alignSelf:'center', marginVertical:15, fontSize:16}}>Or Sign up with</Text>
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
                        <Text style={{fontSize:15}}>Have an account ?</Text>
                        <Text style={{color:'orange', fontSize:16,}}
                            onPress={()=>navgateToSignIn()}
                        >Sign in </Text>
                    </View>
            </View>
        </ScrollView>
    );
}

export default SignUp;
