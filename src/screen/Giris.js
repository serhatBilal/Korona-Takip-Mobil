import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class App extends React.Component {
  state={
    eposta:"",
    sifre:""
  }
   login= ()=>{
    firebase.auth()
    .signInWithEmailAndPassword(this.state.eposta, this.state.sifre)
  .then(() => {
    //console.log('User account created & signed in!');
    alert('Giriş Başarılı');
    console.log(this)
    this.props.navigation.navigate('Anasayfa');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('Girdiğiniz e-posta adresi kullanılıyor!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('E-posta adresi geçersiz!')
    }

    console.error(error);
  });
  }
  singup= ()=>{
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.eposta, this.state.sifre)
  .then(() => {
    //console.log('User account created & signed in!');
    alert('Kullanıcı oluşturuldu');
    console.log(this)
    this.props.navigation.navigate('Anasayfa');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('Girdiğiniz e-posta adresi kullanılıyor!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('E-posta adresi geçersiz!')
    }

    console.error(error);
  });
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Korona Takip</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="E-posta..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({eposta:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifre..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({sifre:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.login()}}>
          <Text style={styles.loginText}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.singup()}}>
          <Text style={styles.loginText}>Kayıt</Text>
        </TouchableOpacity>
        <View>
          <Text style={{color:'#000'}}>Kayıtta girişte bu ekrandan gerçekleşiyor</Text>
        </View>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});