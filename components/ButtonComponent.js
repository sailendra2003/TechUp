import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ButtonComponent = ({ 
  kind = 'primary', 
  variant = 'default', 
  size = 'medium', 
  iconOnly = false, 
  iconName = '', 
  children 
}) => {
  const buttonStyles = [
    styles.button,
    styles[kind],
    styles[size],
    variant === 'outlined' && styles.outlined,
    variant === 'text' && styles.textOnly,
    kind === 'danger' && styles.dangerBorder
  ];

  return (
    <TouchableOpacity style={buttonStyles}>
      {iconOnly ? (
        <Ionicons name={iconName} size={20} color={styles[kind].color.color} />
      ) : (
        <View style={styles.content}>
          {iconName ? <Ionicons name={iconName} size={20} color={styles[kind].color.color} style={styles.icon} /> : null}
          <Text style={[
            styles.text,
            styles[kind].color,
            variant === 'outlined' && styles[kind].outlinedColor,
            variant === 'text' && styles[kind].textOnlyColor
          ]}>
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: '#00E676',
    color: { color: '#1C1C1E' },
    outlinedColor: { color: '#00E676' },
    textOnlyColor: { color: '#00E676' },
  },
  secondary: {
    backgroundColor: '#6c757d',
    color: { color: '#fff' },
    outlinedColor: { color: '#6c757d' },
    textOnlyColor: { color: '#6c757d' },
  },
  success: {
    backgroundColor: '#28a745',
    color: { color: '#fff' },
    outlinedColor: { color: '#28a745' },
    textOnlyColor: { color: '#28a745' },
  },
  danger: {
    backgroundColor: '#dc3545',
    color: { color: '#fff' },
    outlinedColor: { color: '#dc3545' },
    textOnlyColor: { color: '#dc3545' },
  },
  warning: {
    backgroundColor: '#ffc107',
    color: { color: '#212529' },
    outlinedColor: { color: '#ffc107' },
    textOnlyColor: { color: '#ffc107' },
  },
  info: {
    backgroundColor: '#17a2b8',
    color: { color: '#fff' },
    outlinedColor: { color: '#17a2b8' },
    textOnlyColor: { color: '#17a2b8' },
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  textOnly: {
    backgroundColor: 'transparent',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  dangerBorder: {
    borderColor: '#dc3545',
    borderWidth: 1,
  },
});

export default ButtonComponent;
