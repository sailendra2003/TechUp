import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    navigation.navigate('ProductList');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rs{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.reviewsHeader}>Reviews:</Text>
      {product.reviews.map((review, index) => (
        <Text key={index} style={styles.review}>{review.review}</Text>
      ))}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(parseInt(text) || 1)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={20} color="#1C1C1E" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buyNowButton]}
          onPress={() => {
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
            navigation.navigate('BuyNowCartSummary');
          }}
        >
          <Ionicons name="cash-outline" size={20} color="#1C1C1E" />
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1C1C1E',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#00E676',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  reviewsHeader: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  review: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    color: '#fff',
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#2C2C2E',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addToCartButton: {
    backgroundColor: '#00E676',
  },
  buyNowButton: {
    backgroundColor: '#00E676',
  },
  buttonText: {
    color: '#1C1C1E',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ProductDetailsScreen;
