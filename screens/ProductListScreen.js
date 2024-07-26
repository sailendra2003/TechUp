import React, { useState, useContext } from 'react';
import { View, FlatList, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';

const ProductListScreen = ({ navigation }) => {
  const { dispatch } = useContext(CartContext);
  const [showOnePerRow, setShowOnePerRow] = useState(false);

  const products = [
    { id: '1', name: 'Boat airdopes 141 ANC', price: 1699, image: 'https://www.boat-lifestyle.com/cdn/shop/products/1_05260e43-8f0b-4776-a433-ea2089c7f7e7.png?v=1659614550', description: 'Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance', reviews: [{ review: 'Great product!' }] },
    { id: '2', name: 'Zeb Monk Earbands', price: 1099, image: 'https://zebronics.com/cdn/shop/products/Zeb-Yoga-2-pic12.jpg?v=1635857414&width=1200', description: 'Zeb-Monk is an active noise-cancellation wireless earphone that comes with a sleek and minimalistic look', reviews: [{ review: 'Loved it!' }] },
    { id: '3', name: 'Airdopes 131', price: 1999, image: 'https://www.boat-lifestyle.com/cdn/shop/products/viper-green.png?v=1642405569', reviews: [{ review: 'Highly recommend!' }] },
    { id: '4', name: 'Noise Airdopes', price: 2199, image: 'https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee.png?v=1697625863', description: 'High end airdopes with good functionality', reviews: [{ review: 'Amazing quality!' }] },
    { id: '5', name: 'Noise earbands', price: 2299, image: 'https://cdn1.smartprix.com/rx-iVwas8AiK-w420-h420/noise-buds-ace-true.jpg', description: 'High end airdopes with good functionality', reviews: [{ review: 'Great quality!' }] },
    { id: '6', name: 'Boat airdopes', price: 1799, image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a.png?v=1698315950', description: 'High end airdopes with good functionality', reviews: [{ review: 'Good quality!' }] },
    { id: '7', name: 'Boat Airdopes ', price: 1899, image: 'https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee.png?v=1697625863', description: 'High end airdopes with good functionality', reviews: [{ review: 'Fantastic quality!' }] },
    { id: '8', name: 'Boat Airdopes', price: 1999, image: 'https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee.png?v=1697625863', description: 'High end airdopes with good functionality', reviews: [{ review: 'Affordable,long lasting!' }] },
];

  const toggleLayout = () => {
    setShowOnePerRow(!showOnePerRow);
  };

  const handleBuyNow = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
    navigation.navigate('BuyNowCartSummary');
  };

  const renderItem = ({ item }) => (
    <View style={showOnePerRow ? styles.onePerRowItem : styles.twoPerRowItem}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyNowButton} onPress={() => handleBuyNow(item)}>
        <Text style={styles.buyNowButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleLayout}>
        <Text style={styles.toggleButtonText}>Toggle {showOnePerRow ? '2' : '1'} per row</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={showOnePerRow ? 1 : 2}
        key={showOnePerRow ? 'one-column' : 'two-column'}
      />
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1C1C1E',
  },
  onePerRowItem: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 10,
  },
  twoPerRowItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    // flexBasis: '48%',
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    color: '#00E676',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buyNowButton: {
    backgroundColor: '#00E676',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#00E676',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleButtonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
