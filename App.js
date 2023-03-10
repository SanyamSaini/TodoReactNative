import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {Header} from './components/header';
import {TodoItem} from './components/todoitem';
import {AddTodo} from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text : 'buy Coffee', key : '1'},
    {text : 'Create an App', key : '2'},
    {text : 'play on the switch', key : '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text : text, key : Math.random().toString()},
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todos should be longer than 3 chars.', [
        {text : 'Understood', onPress : () => console.log('aler closed.')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}> 
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          {/*Content*/}
          <View style={styles.list}>
            {/*List*/}
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
