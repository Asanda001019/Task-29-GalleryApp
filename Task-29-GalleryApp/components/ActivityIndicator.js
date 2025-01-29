import { ActivityIndicator } from 'react-native';

// Inside your ImageGallery component
const [loading, setLoading] = useState(false);

const pickImage = () => {
  setLoading(true);
  launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
    setLoading(false);
    if (response.assets) {
      setImages([...images, ...response.assets.map(asset => asset.uri)]);
    } else {
      // Handle error
    }
  });
};

// In your render method
{loading && <ActivityIndicator size="large" color="#0000ff" />}
