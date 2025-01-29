import React from 'react';
import { Modal, View, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ImageModal = ({ visible, images, onClose, activeIndex }) => {
  // Function to get the current image URI
  const getCurrentImage = () => {
    return images[activeIndex] || null; // Return the current image URI
  };

  // Function to navigate to the next image
  const nextImage = () => {
    if (activeIndex < images.length - 1) {
      onClose(activeIndex + 1); // Update the active index
    }
  };

  // Function to navigate to the previous image
  const previousImage = () => {
    if (activeIndex > 0) {
      onClose(activeIndex - 1); // Update the active index
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          source={{ uri: getCurrentImage() }}
          style={styles.fullScreenImage}
          resizeMode="contain"
        />
        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={previousImage} disabled={activeIndex === 0} />
          <Button title="Close" onPress={() => onClose(-1)} />
          <Button title="Next" onPress={nextImage} disabled={activeIndex === images.length - 1} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  fullScreenImage: {
    width: width,
    height: height * 0.8, // Adjust height as needed
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default ImageModal;