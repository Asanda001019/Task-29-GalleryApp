import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

// Inside your ImageItem component
const ImageItem = ({ uri, onPress, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(uri)}>
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      {onDelete && <Button title="Delete" onPress={onDelete} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%', // Full width of the container
    height: 400, // Adjust height as needed
    borderRadius: 10, // Optional: add rounded corners
  },
});

export default ImageItem;