import React, { Component } from 'react';
import Markdown from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';

import styles from '../../styles/default';

import { rules } from './rules';

const stylesheet = StyleSheet.create(styles.markdown);

export default class MyMarkdown extends React.Component {
    
    render() {
        const {isVideoLink, handleClick} = this.props;
        return (
            <Markdown rules={rules({isVideoLink, handleClick})} style={stylesheet}>{this.props.content}</Markdown>
        )
    }
   
}