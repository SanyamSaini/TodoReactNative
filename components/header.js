import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export  function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 80,
        padding : 38,
        backgroundColor : 'coral',
    },
    title : {
        color : '#fff',
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 20,
    },
});