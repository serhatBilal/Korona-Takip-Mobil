import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Turkiye from './src/screen/Turkiye';
import Haberler from './src/screen/Haberler';





function Iletisim() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Anasayfa">
        <Drawer.Screen name="Anasayfa" component={TabNavigator} />
        <Drawer.Screen name="Iletisim" component={Iletisim} />

      </Drawer.Navigator>     
    </NavigationContainer>
  );
}