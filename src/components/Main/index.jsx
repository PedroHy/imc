import React from 'react';


import {View, StyleSheet} from 'react-native';
import Form from '../Form';

const Main = () => {
  return (
  <View style={styles.main}>
    <Form />
  </View>
  );
}

const styles = StyleSheet.create({
    main:{
      flex: 4,
      backgroundColor: '#fff',
      padding: '8%',
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px'
    }
})

export default Main;