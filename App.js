import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home'
import CalenderScreen from './Calender'

const Stack = createStackNavigator();
/*
function HomeScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Move to Calendar"
        onPress={() => navigation.navigate("Calendar")}
        />
    </View>
  )
}
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component = {HomeScreen} />
        <Stack.Screen name = "Calendar" component = {CalenderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 


