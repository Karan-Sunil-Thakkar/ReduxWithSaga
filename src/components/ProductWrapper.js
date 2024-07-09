import {Button, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header1 from './Header1';
import Products from './Products';
import UserList from './UserList';




const ProductWrapper = ({navigation}) => {
  const products = [
    {
      name: 'Smasung Mobile',
      color: 'White',
      price: 30000,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jessbaileydesign-788946.jpg&fm=jpg',
    },
    {
      name: 'Apple I Phone ',
      color: 'Green',
      price: 130000,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jessbaileydesign-788946.jpg&fm=jpg',
    },
    {
      name: 'Nokia Mobile',
      color: 'Black',
      price: 20000,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jessbaileydesign-788946.jpg&fm=jpg',
    },
  ];
  return (
    <View style={styles.container}>
        <Button title='Navigate to User screen' onPress={()=>navigation.navigate(UserList)} />
      <Header1 />
    <ScrollView>
    {products.map((item) => <Products  item={item} />)}
    </ScrollView>
      
      <Text>UI for add to cart with Redux.</Text>
    </View>
  );
};

export default ProductWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: 'white',
    color: 'black',
  },
});
