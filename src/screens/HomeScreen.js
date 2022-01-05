import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
// import SearchBar from "react-native-dynamic-search-bar";
import SearchBarComponent from '../components/searchBarComponent';

const HomeScreen = () =>{
    return (
        <View>
        {/* <SearchBar
            style={styles.searchStyle}
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
        /> */}
        <SearchBarComponent/>
        <Text>Welcome to enCake,</Text>
        <Text>What dessert would you like!</Text>
        </View>
        )
};
const styles = StyleSheet.create({
    searchStyle:{
        color:'#c6c6c6',
        backgroundColor:'#ffffff'
    }
});

export default HomeScreen;