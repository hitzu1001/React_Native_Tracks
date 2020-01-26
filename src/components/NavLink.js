import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  link: {
    color: '#0275d8'
  }
});
export default withNavigation(NavLink);
