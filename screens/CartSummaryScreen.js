import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartSummaryScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity } });
  };

  const totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.itemActions}>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={String(item.quantity)}
          onChangeText={(text) => handleQuantityChange(item, Number(text))}
        />
        <TouchableOpacity onPress={() => handleRemove(item)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>Cart Summary</Text>}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.total}>Total Amount: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.buttonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        }
      />
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
  itemDetails: {
    flexDirection: 'column',
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00E676',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    textAlign: 'center',
    marginRight: 10,
    color: '#FFFFFF',
    backgroundColor: '#2C2C2E',
    borderRadius: 5,
  },
  removeButton: {
    color: '#FF4C4C',
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#2C2C2E',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00E676',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartSummaryScreen;
