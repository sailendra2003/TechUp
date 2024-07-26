import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, StyleSheet } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartSummaryScreen from '../screens/CartSummaryScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import BuyNowCartSummaryScreen from '../screens/BuyNowCartSummaryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1C1C1E',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerRight: () => (
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/TechUpLogo.png')}
                style={styles.logo}
              />
            </View>
          ),
          cardStyle: { backgroundColor: '#1C1C1E' },
          transitionSpec: {
            open: { animation: 'spring', config: { stiffness: 1000, damping: 500 } },
            close: { animation: 'timing', config: { duration: 300 } },
          },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
        <Stack.Screen name="CartSummary" component={CartSummaryScreen} options={{ title: 'Cart Summary' }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
        <Stack.Screen name="BuyNowCartSummary" component={BuyNowCartSummaryScreen} options={{ title: 'Buy Now Summary' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginRight: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default AppNavigator;
