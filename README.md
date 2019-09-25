# BODY 3D

### 1. Install and Run app

- Install

  - Install library react-native

    ```
    npm install --save react-native-webview
    react-native link react-native-webview
    ```

- Run app
  - Run file index.html in folder bodyapps-viz on server
  - Run react-native on android

### 2. API

- Thư mục **Body3D** chứa source phần app react-native gọi view của bodyapps.

- Dữ liệu kết quả trả về gồm **result** và **gender** lấy từ server.

- Uri trong webview : Thay đổi host theo server của bodyapps.

```
source={{uri:'http://192.168.100.7:8000?result=' + result}}
```

#### App.js

```
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
```

- Dữ liệu truyền đi ngay trên parameter của url, sau đó được phân tách và truyền cho config để hiện kết quả:

  #### Index.html
  
  ```
  loader.load("models/skinned/testconfig.json", function (text) {
      var config = JSON.parse(text);
      var url_string = window.location.href;
      console.log("url: ", url_string);
      var url = new URL(url_string);
      var morphslimit = url.searchParams.get("result");
    var morphslimit = morphslimit.split(',').map(function (item) {
      return parseInt(item, 10);
      });
      console.log(morphslimit);
      config.morphslimit = morphslimit;
      character.loadParts(config);
      scene.add(character.root);
      });
  ```
  
  



