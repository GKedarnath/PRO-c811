import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class CreateStory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
              <Image
              source = {require("../assets/logo.png")}
              style = {styles.iconImage}
              ></Image>
          </View>
        </View>
        <View style = {styles.appTitleTextCointainer}>
            <Text style = {styles.appTitleText}>SPECTAGRAM</Text>
        </View>
        
         <View style = {styles.cardContainer}>
            <FlatList
                keyExtractor = {this.keyExtractor}
                data = {posts}
                renderItem = {this.renderItem}
                />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: RFValue(35),
  },
  appTitle: {
    flex: 0.7,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
   },
   iconImage: {
     width: "100%",
     height: "100%",
     resizeMode: "contain",
   },
   appTitleTextCointainer: {
     flex: 0.0,
     justifyContent: "center",
   },
   appTitleText: {
     color: "white0",
     fontSize: RFValue(28),
   },
   cardContainer: {
     flex: 0.85,
   }
})