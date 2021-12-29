import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

const HomeScreen = () =>{
    return (
        <View>
            <SearchBar
            style={styles.searchStyle}
            placeholder="Search here"
            onChangeText={(text) => this.filterList(text)}
            onSearchPress={() => console.log("Search Icon is pressed")}
            onClearPress={() => this.filterList("")}
            onPress={() => alert("onPress")}
            />
            <Text>Welcome to enCake,</Text>
            <Text>What dessert would you like!</Text>
        </View>
        )
};
const styles = StyleSheet.create({
    searchStyle:{
        fontColor="#c6c6c6",
        iconColor="#c6c6c6",
        shadowColor="#282828",
        cancelIconColor="#c6c6c6",
        backgroundColor="#353d5e"
    }

});

export default HomeScreen;