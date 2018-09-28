import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { applyStyle, openUrl, getUniqueID } from 'react-native-markdown-renderer';
import FitImage from 'react-native-fit-image';
const myStyles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    },
  });
const _handleClick = (url) => {
  openUrl(url)
}

const _isVideoLink = (target) => {
  return target.indexOf('https://www.youtube.com/watch') == 0;
}

const hasImageChild = (children) => {
  return children[0].type == 'image';
}

export const rules = ({isVideoLink = _isVideoLink, handleClick = _handleClick}) => {
  return {
    link: (node, children, parent, styles) => {
      return (
        <Text key={node.key} style={styles.link} onPress={() => handleClick(node.attributes.href)}>
          {children}
        </Text>
      );
    },
    // a with a non text element nested inside
    blocklink: (node, children, parent, styles) => {
      if (isVideoLink(node.attributes.href) && hasImageChild(node.children)) {
        return (
          <TouchableOpacity key={node.key} onPress={() => handleClick(node.attributes.href)} style={styles.blocklink}>
            <View key={getUniqueID()} style={{ width: '100%', height: 300 }} >
                <Image key={getUniqueID()} indicator={true} style={{width: '100%', height: 300}} source={{ uri: node.children[0].attributes.src }} />
                <View key={getUniqueID()} style={myStyles.imageOverlay}>
                  <Image key={getUniqueID()} resizeMode="contain" style={{width: 80, height: 80}} source={require('./play-icon.png')}></Image>
                </View>
            </View>
          </TouchableOpacity>
        )
      }
      return (
        <TouchableOpacity key={node.key} onPress={() => handleClick(node.attributes.href)} style={styles.blocklink}>
          <View style={styles.image}>{children}</View>
        </TouchableOpacity>
      );
    },
  }
}