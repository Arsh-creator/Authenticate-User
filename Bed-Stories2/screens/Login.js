import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import db from '../config';
import * as firebase from 'firebase';

export default class login extends React.Component{
    constructor(){
        super();
        this.state={
            emailAddress: '',
            password:''
        }
    }
    login=async(email, password)=>{
        console.log(email, password)
        if (email&&password){
            var response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
                console.log("auth successful")
                this.props.navigation.navigate('TabNavigator');
            }
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                    <TextInput
                    placeholder = 'example@gmail.com'
                    onChangeText={(text)=>{
                        
                        this.setState({
                            emailAddress: text
                        })
                        
                    }}/>
                    <TextInput
                    placeholder = 'password'
                    onChangeText={(text)=>{
                        console.log(text)
                        this.setState({
                            Password: text
                        })
                    }}/>
                </View>
                <TouchableOpacity
                onPress={()=>{this.login(this.state.emailAddress, this.state.Password)}}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}