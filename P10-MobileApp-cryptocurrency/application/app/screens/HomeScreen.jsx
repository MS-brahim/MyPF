import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList, View,ScrollView,  Text } from 'react-native';
import { Avatar, ListItem, Header } from 'react-native-elements';
import axios from 'axios'
import firebase from '../../Config'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'https://cryptoccapi.herokuapp.com/api/v1/'

export default class HomeScreen extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            solde:0,
            email:''
        };
    }

    componentDidMount() {
        this.getCoin();
        this.getUserInfo();
    }

    async getUserInfo(){
        try {
            await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const response = await axios.get(apiUrl+'user/read/'+user.uid)
                // console.log(user);
                this.setState({solde:response.data, email:user})
                
            } else {
                console.log('No user is signed in.');
            }
        });
        } catch (error) {
            console.log(error);
        }
    }

    async getCoin() {
        try {
        const response = await axios.get('https://api.coincap.io/v2/assets',{params:{limit:10}})
            this.setState({data:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }

    async logOutUser(){
        AsyncStorage.clear().then(()=>{
            this.props.navigation.navigate('signIn')
        })
    }

    render() {
        const { data, isLoading, solde, email } = this.state;

        return (
        <ScrollView>
            <Header
                leftComponent= {<Text  style={{color:'#fff', width:220}}> {email.email} </Text>}
                rightComponent={<Text style={{color:'#fff', width:80}} onPress={()=>this.logOutUser()} >Logout <Icon name='sign-out' size={18} color='#fff'></Icon></Text>}
                backgroundColor= 'orange'
            />
            <View style={{ flex: 1, backgroundColor:'#fff' }}>
                    {isLoading ? <ActivityIndicator style={{flex:1}}/> : (
                        <FlatList
                            // refreshing={isLoading}
                            // onRefresh={this.getCoin()}
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            style={{color:'red'}}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail',{itemID: item.id, soldeState:solde.solde, email:email.email})} style={{shadowColor: 'black',shadowOffset: {width: 0, height: 1},shadowOpacity: 0.2,elevation: 1}}>
                                <ListItem>
                                    <Avatar source={{uri: `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png `}} />
                                    {/* <Icon name={item.id} size={22}/> */}
                                    <ListItem.Content style={{flex:5}}>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                            <ListItem.Subtitle>{item.symbol}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Title style={{flex:5}}>
                                        ${ Number.parseFloat(item.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </ListItem.Title>
                                    <ListItem.Title > 
                                        { item.changePercent24Hr>0 ? 
                                        <Text style={{color:'green'}}> 
                                            {Number.parseFloat(item.changePercent24Hr).toFixed(2)}% 
                                        </Text>: <Text style={{color:'red'}}>
                                            {Number.parseFloat(item.changePercent24Hr).toFixed(2)}% 
                                        </Text>}
                                    </ListItem.Title>
                                </ListItem>
                                </TouchableOpacity>
                            )}
                        />
                    )}
            </View>
        </ScrollView>
        );
    }
};