import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.appbartext}>Eu Sou Programador</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require("./assets/image/react-avatar.png")}
          style={styles.Image} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },

  appbar: {
    height: 70,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    elevation: 4
  },

  appbartext: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  Image: {
    width: 300,
    height: 300
  }
});
