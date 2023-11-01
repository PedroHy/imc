import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>IMC Calculator</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  titleContainer:{
    flex: 1
  },

  title: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default Title;