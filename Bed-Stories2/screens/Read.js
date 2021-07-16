import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar, Header} from 'react-native-elements';
import db from '../config'

export default class Read extends React.Component{
    
    constructor(){
     super()   
    this.state={
        allStories: [],
        dataSource: [],
        search: ''
    }
    }

    retrieveStory=async()=>{
        try{
        var allStories = [];
        var stories = db.collection("Story")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               allStories.push(doc.data());
            });
            this.setState({
                allStories: allStories
            })
        })
    }
    catch(error) {
            console.log("Error", error);
        }
    };

    SearchFilterFunction (text) {
        if (text) {
          const newData = this.state.allStories.filter(function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          this.setState({
          dataSource: newData,
          search: text
          })
        }
      }
    
    render(){
        return(
           
            <View style={styles.container}> 
                <Header
                backgroundColor= {'pink'} 
                centerComponent= {{
                text: 'Bed Time Stories',
                style:{color:'white', fontSize: 20}
                }}/>
                <View>
                <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Story: " + item.Story}</Text>
              <Text>{"Title: " + item.Title}</Text>
              <Text>{"Author: " + item.Author}</Text>
              <Text>{"Date: " + item.date.toDate()}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        /> 
                </View>
                <View style={{height: 20, width: '100%'}}>
                    <SearchBar
                    placeHolder = 'Type Here'
                    onChangeText={text=> this.SearchFilterFunction(text)}
                    onClear={text=> this.SearchFilterFunction ('')}
                    value={this.state.search}
                     />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    }
})