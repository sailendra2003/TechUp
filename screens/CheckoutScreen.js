import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = () => {
  const { state } = useContext(CartContext);
  const totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order Placed Successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      {state.cartItems.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total Amount: ${totalAmount.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1C1C1E',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00E676',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#00E676',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
