import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import Settings from './screens/Settings';
import NewTask from './screens/NewTask';
import CreateCategory from './screens/CreateCategory';


function TabNavigator() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
              <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarBadge: 3,
        }}
        />

        <Tab.Screen 
          name="addTask" 
          component={NewTask} 
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" color={color} size={30} />
            ),
            }}
          />

        
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" color={color} size={30} />
            ),
            tabBarBadge: 3,
            }}
          />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();
function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    }
  });


  
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreeen"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreateCategory" component={CreateCategory} />
      </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  );
}




export default App;