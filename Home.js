import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var month = new Date().getMonth()+1;
    var date = new Date().getDate();
    var year = new Date().getFullYear();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    

    setCurrentDate(
      month + '/' + date + '/' + year + ' ' + hours + ':' + minutes 
    );
  })

  

  return (
    <View style={styles.container}>

      <Text style={styles.timeFont}>{currentDate}</Text>



      <Text>WELCOME</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonTest}>
        <Button
            title="Move to Calendar"
            onPress={() => navigation.navigate("Calendar")}
            />
        <Button 
          onPress={() => {
            alert('hi');
          }}
          title="press me for testing"
        />
      </View>
      <Button 
        onPress={() => {
          alert('hi');
        }}
        title="press me"
        />

      <Button 
        onPress={() => {
          alert('hi');
        }}
        title="press me"
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeFont:{
    fontSize: 50,
    height: 600, 
    
  },

  buttonTest:{
    alignItems: "flex-start",
    fontSize:10, 
    
  }
});

