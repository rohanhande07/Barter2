import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import db from "../config"
import firebase from 'firebase'

export default class SignupLogin extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        return Alert("Successfully logged in")
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert(errorMessage)
    })
}

userSignUp = (username,password)=>{
    firebase.auth().createUserWithEmailAndPassword(username,password)
    .then((response)=>{
        return Alert("User added successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert(errorMessage)
    })
}

    render(){
        return(
            <View>
                <View>
                <Text style={styles.title}>Barter App</Text>
                </View>
                <View>
                    <Text style = {styles.inputText}>Username:</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    keyboardType = 'email-address'
                    placeholder = 'abc@example.com'
                    onChangeText = {(text)=>{
                        this.setState({
                            username: text
                        })
                    }}
                    />
                </View>
                <View>
                    <Text style = {styles.inputText}>Password:</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = 'Enter password'
                    onChangeText = {(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                    />
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                        style = {[styles.button, {marginBottom: 10}]}
                        onPress = {()=>{
                            this.userLogin(this.state.username, this.state.password)
                        }}>
                            <Text style={{color:'red',fontSize:18,fontWegiht:'bold'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.username, this.state.password)
                    }}>
                        <Text style={{color:'red',fontSize:18,fontWegiht:'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        fontWeight: "300",
        paddingBottom: 30,
        color: "blue"
      },
    inputText: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 55
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: "black",
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
      },
      button: {
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "pink"
    },
})