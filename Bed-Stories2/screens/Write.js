import React from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ToastAndroid, TouchableOpacity} from 'react-native';
import db from '../config';

export default class Write extends React.Component(){

   constructor(){
       super();
       this.state={
           Title: '',
           Author:'',
           Story:''
       }
   }

   submitStory= async()=>{
       M = "Your story is selected. For any please contact 9335952027"
       db.collection('Story').add({
            "Title" : this.state.Title,
            "Author" : this.state.Author,
            "Story" : this.state.Story  
       })
       ToastAndroid(M, ToastAndroid.SHORT);
   }

 render(){
    return(
    <View style={styles.container}>  
      <View>  
      <Text style={{textAlign: 'center', fontSize: 30,
      backgroundColor: 'lightgreen', fontFamily: 'sans-serif'}}> Story Hub </Text>   
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.inputBox}
      placeholder = 'Title Of Story'
      onChangeText={text=> {this.setState({
          Title: text
      })}}
      value={this.state.Title}
      />
      <TextInput style={styles.inputBox}
      placeholder = 'Author Of Story'
      onChangeText={text=> {this.setState({
        Author: text
    })}}
    value={this.state.Author}
      />
      <TextInput style={styles.storyBox}
      placeholder = 'Write Your Story Here'
      onChangeText={text=> {this.setState({
        Story: text
    })}}
    value={this.state.Story}
      />
      <View>
          <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
              <Text style={styles.submitButtonText}>
                  Submit
              </Text>
          </TouchableOpacity> 
      </View>
      </View>
      
    </View>
    );
 }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'pink',
        alignItems:'center'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    displayText:{
        fontSize:15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
    },
    buttonText:{
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center'
    },
    inputBox:{
        width: 200,
        height: 50,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    storyBox:{
        width: 200,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    scanButton:{
        backgroundColor: '#66BB9A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    },
    submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: 'white'
    },
    submitButton:{
        backgroundColor: 'FBC02D',
        width: 200,
        height: 50
    }
});