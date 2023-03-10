import { StyleSheet, Text, View } from 'react-native';
import Inicio from './views/Inicio/Inicio';
import Login from './views/login/Login';
import Register from './views/register/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/home/Home';
import { UserProvider } from './services/Context';
import { AddTask } from './views/task/AddTask';
import { EditTask } from './views/task/EditTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>

      <View style={styles.container}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
             <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />

              <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
              <Stack.Screen name="AddTask" component={AddTask} options={{headerShown:false}} />
              <Stack.Screen name="EditTask" component={EditTask} options={{headerShown:false}} />

            
          </Stack.Navigator>
        </NavigationContainer>
      </View>

    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`#dcdcdc`,
  },
});
