import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Turkiye from './src/screen/Turkiye';
import Haberler from './src/screen/Haberler';
import * as firebase from 'firebase';
import apiKeys from './Firebase'
import KayitGiris from './src/screen/Giris';



function Iletisim() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>İletişim!</Text>
      <Text>Mustafa KELEŞ</Text>
      <Text>mustafa.keles4@ogr.sakarya.edu.tr</Text>
      <Text>Olgun DUMAN</Text>
      <Text>olgun.duman1@ogr.sakarya.edu.tr</Text>
      <Text>Serhat BİLAL</Text>
      <Text>serhat.bilal@ogr.sakarya.edu.tr</Text>
      
    </View>
  );
}

function Kurallar() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>

<Text>{'\n'}</Text>
  
<Text>Corona Virüs 14 Kural</Text>

<Text>1.Ellerinizi sık sık su ve sabun ile en az 20 saniye boyunca ovarak yıkayın.</Text>

<Text>2.Soğuk algınlığı belirtileri gösteren kișilerle aranıza en az 3-4 adım mesafe koyun.</Text>

<Text>3.Öksürme veya hapșırma sırasında ağız ve burunu tek kullanımlık mendille kapatın. Mendil yoksa dirseğin iç kısmını kullanın.</Text>

<Text>4.Tokalașma, sarılma gibi yakın temaslardan kaçının.</Text>

<Text>5.Ellerinizle gözlerinize, ağzınıza ve burnunuza dokunmayın.</Text>

<Text>6.Yurt dıșı seyahatlerinizi iptal edin ya da erteleyin.</Text>

<Text>7.Yurt dıșından dönüște ilk 14 günü evinizde geçirin.</Text>

<Text>8.Bulunduğunuz ortamları sık sık havalandırın.</Text>

<Text>9.Kıyafetlerinizi 60-9OC’de normal deterjanla yıkayın.</Text>

<Text>10.Kapı kolları, armatürler, lavabolar gibi sık kullandığınız yüzeyleri su ve deterjanla her gün temizleyin.</Text>

<Text>11.Soğuk algınlığı belirtileriniz varsa yașlılar ve kronik hastalığı olanlarla temas etmeyin, maske takmadan dıșarı çıkmayın.</Text>

<Text>12.Havlu gibi kișisel eșyalarınızı ortak kullanmayın.</Text>

<Text>13.Bol sıvı tüketin, dengeli beslenin, uyku düzeninize dikkat edin.</Text>

<Text>14.Düșmeyen ateș, öksürük ve nefes darlığınız varsa, maske takarak bir sağlık kurulușuna bașvurun.</Text>

    </View>
    
    

  );
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function TurkiyeStack(){
  return(
    <Stack.Navigator initialRouteName="Turkiye" headerMode="none">
      <Stack.Screen name="Turkiye" component={Turkiye} />
    </Stack.Navigator>
  );
}


function DunyaStack(){
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dunya" component={Haberler} />
    </Stack.Navigator>
  );
}

function TabNavigator(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({  color, size }) => {
        if (route.name === 'Türkiye') {
          return (
            <Ionicons
              name={'md-home'
              }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Haberler') {
          return (
            <Ionicons
              name={'md-notifications'}
              size={size}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Türkiye" component={TurkiyeStack} />
    <Tab.Screen name="Haberler" component={DunyaStack} />
  </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();


export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth:false,
      isAuthReady:false,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.firebaseConfig)
      firebase.auth().onAuthStateChanged((user)=>{
        this.setState({isAuthReady:true})
        this.setState({isAuth:!!user})
      })
    }
  }

  render() {

    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName={(this.state.isAuth ? "Anasayfa" : "KayitGiris")}>
        <Drawer.Screen name="Anasayfa" component={TabNavigator} />
        <Drawer.Screen name="KayitGiris" component={KayitGiris} />
        <Drawer.Screen name="Iletisim" component={Iletisim} />
        <Drawer.Screen name="Kurallar" component={Kurallar} />
      </Drawer.Navigator>     
    </NavigationContainer>
    );
  }
}

