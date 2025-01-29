import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native';
import ImageItem from './ImageItem'; // Import your ImageItem component
import ImageModal from './ImageModal'; // Import your ImageModal component
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the index of the selected image

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.assets) {
        setImages([...images, ...response.assets.map(asset => asset.uri)]);
      }
    });
  };

  const openImage = (index) => {
    setSelectedImageIndex(index); // Set the index of the selected image
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Images" onPress={pickImage} />
      <Text style={styles.instructionText}>Tap on an image to view it in full screen.</Text>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <ImageItem uri={item} onPress={() => openImage(index)} /> // Pass the index to openImage
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4} // Adjust the number of columns for larger images
      />
      <ImageModal
        visible={modalVisible}
        images={images} // Pass the images array to the modal
        activeIndex={selectedImageIndex} // Pass the selected image index
        onClose={(newIndex) => {
          if (newIndex === -1) {
            setModalVisible(false); // Close the modal
          } else {
            setSelectedImageIndex(newIndex); // Update the index for navigation
          }
        }}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  instructionText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: '#555', // Optional: change color for better visibility
  },
});

export default ImageGallery;