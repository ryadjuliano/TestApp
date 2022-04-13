/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import { Root, Popup } from 'popup-ui'
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [Phone, setPhone] = useState('');
  const [LoggedUserId, setLoggedUserId] = useState('');
  const [NameLoggin, setNameLoggin] = useState('');
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggingInDialogVisible, setLoggingInDialogVisible] = useState(false);
  
  const LoginProcess = async () => {
    navigation.navigate('Home')
  }
  return ( 
    <SafeAreaView style={styles.container}>
      {/* <Text>Page content</Text> */}

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          alignItems: 'stretch',
          paddingHorizontal: 18,
          paddingTop: 20,
        }}>
        {/* <Loader loading={true} /> */}
        <View
          style={{
            height: undefined,
            width: '100%',
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{width: 150, height: 150}}></View>
        </View>
        <View style={{height: 25, backgroundColor: '#f4fbfa'}}>
          <Text
            style={{
              fontSize: 16,
              // fontFamily: Colors.FontsObm.FontFamily,
              fontWeight: '500',
              // color: Colors.obmBlue.background,
            }}>
            Username
          </Text>
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>{errortext}</Text>
        ) : null}

        <View style={{height: 50, backgroundColor: '#f4fbfa', marginTop: 5}}>
          <TextInput
            placeholder=""
            placeholderTextColor="#000"
            style={styles.textInput}
            keyboardType={'phone-pad'}
            onChangeText={Phone => setPhone(Phone)}
          />
        </View>

        <View style={{height: 25, backgroundColor: '#f4fbfa'}}>
          <Text
            style={{
              fontSize: 16,
              // fontFamily: Colors.FontsObm.FontFamily,
              fontWeight: '500',
              // color: Colors.obmBlue.background,
            }}>
            Password
          </Text>
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>{errortext}</Text>
        ) : null}

        <View style={{height: 50, backgroundColor: '#f4fbfa', marginTop: 5}}>
          <TextInput
            placeholder=""
            placeholderTextColor="#000"
            style={styles.textInput}
            keyboardType={'phone-pad'}
            onChangeText={Phone => setPhone(Phone)}
          />
        </View>

        <View
          style={{height: 50, backgroundColor: 'black', marginTop: 30}}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => LoginProcess()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbfa',
    //   alignItems: 'center',
    //   paddingHorizontal:20,
    paddingTop: 50,
    // paddingVertical:20,
    paddingHorizontal: 18,
    //   justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fb5b5a',
    //   marginBottom:40
  },
  textInput: {
    // alignSelf: 'stretch',
    // padding: 10,
    // marginLeft: 50,
    // borderBottomColor:'#000',
    // margin:5,
    // marginRight:50,
    // backgroundColor: '#000',
    borderBottomColor: '#66C1BF', // Add this to specify bottom border color
    borderBottomWidth: 2,
    color: 'black',
    marginTop: 3, // Add this to specify bottom border thickness
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '100%',
    // backgroundColor: Colors.obmBlue.background,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //   marginTop:40,
    //   marginBottom:10
  },
  loginText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Login;
