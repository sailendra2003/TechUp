import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

const Navbar = ({ navigation }) => {
  const { state } = useContext(CartContext);
  const totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ProductList')}>
        <Ionicons name="home" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.cartInfo}>
        <TouchableOpacity onPress={() => navigation.navigate('CartSummary')}>
          <Ionicons name="cart" size={24} color="#fff" />
          {/* <Text style={styles.navbarText}>Items: {state.cartItems.length}</Text>
          <Text style={styles.navbarText}>Total: Rs{totalAmount.toFixed(2)}</Text> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1C1C1E',
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  iconButton: {
    padding: 10,
  },
  cartInfo: {
    alignItems: 'center',
  },
  // navbarText: {
  //   color: '#fff',
  //   fontSize: 14,
  //   fontWeight: 'bold',
  // },
});

export default Navbar;
