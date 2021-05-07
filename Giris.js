import React from 'react'
import { View, Text } from 'react-native'

export default function Giris() {
    return return (
        <View style={styles.container}>
          <Text style={styles.logo}>Korona Takip</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="E-posta..." 
              placeholderTextColor="#003f5c"
              onChangeText={text =>{}}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Şifre..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => {}}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={}>
            <Text style={styles.loginText}>Giriş</Text>
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
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });