import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ImageGallery from './components/ImageGallery'; // Adjust the path if necessary

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;