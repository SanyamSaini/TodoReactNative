import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Header} from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text : 'buy Coffee', key : '1'},
    {text : 'Create an App', key : '2'},
    {text : 'play on the switch', key : '3'}
  ]);
  return (
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        {/*Content*/}
        <View style={styles.list}>
          {/*List*/}
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content : {
    padding : 40,
  },
  list : {
    marginTop : 20,
  },
});
