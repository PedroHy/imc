import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Result = ({message, result}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.result}>{result}</Text>
            <Text>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    result:{
        fontSize: '32px',
        fontWeight: 'bold',
        marginTop: '15%'
    }
})

export default Result;