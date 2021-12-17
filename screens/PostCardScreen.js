import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CreateStory extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.cardcontainer}>
            <View style = {styles.authorcontainer}>
                <View style = {styles.authorImagecontainer}>
                    <Image
                      source = {require("../assets/profile_img.png")}
                      style = {styles.profileImage}
                      ></Image>
                </View>
                <View style = {styles.authorNameContainer}>
                    <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                </View>
            </View>
            <Image source = {require("../assets/post.jpeg")} style = {styles.postImage}/>
            <View style = {styles.captionContainer}>
                <Text style = {styles.captionText}>
                    {this.props.post.caption}
                </Text>
            </View>
            <View style = {styles.actionContainer}>
                <View style  = {styles.captionText}>
                      <Ionicons name = {"heart"} size = {RFValue(30)} color = {"white"}/>
                      <Text style = {styles.likeText}>12k</Text>
                </View>
                <FlatList
                keyExtractor = {this.keyExtractor}
                data = {posts}
                renderItem = {this.renderItem}
                />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
