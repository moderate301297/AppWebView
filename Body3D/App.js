import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {

    render() {
        const result = "160,97,77,110"
        const gender = "Nam"
        if ( gender == 'Nam' ) {
            return (
                    <WebView
                    source={{uri:'http://192.168.100.7:8000?result=' + result}}
                    style={{flex: 1}}
                    mixedContentMode='always'
                    />
             );
        } else {
            return (
                    <WebView
                    source={{uri:'http://192.168.100.7:8000/female.html?result=' + result}}
                    style={{flex: 1}}
                    mixedContentMode='always'
                    />
             );
        }
    }
}