import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addtocart, removeFromCart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Products = props => {
  // this is props passed by App.js
  const item = props.item;

  // Create function for using UseDispatch Hook (it is used to called the action function of redux )
  const dispatch = useDispatch();

  //  get the data from  reducer to filter ..
  const {cart} = useSelector(state => state.reducer);

  //  This useState is for filter the data from
  const [isAdded, setIsAdded] = useState(false);

  // Create handler for the button ..
  const handleAddtocart = item => {
    // console.warn('Function called ', item);
    dispatch(addtocart(item));
  };

  //  Remove handle RemovefromCatrt to remove the data .
  const handleRemoveFromCart = item => {
    // console.warn(item.name)
    dispatch(removeFromCart(item.name))
  };

  //  This useEffect is for filter the data from reducer ..
  useEffect(() => {
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(elements => {
    //     // console.warn(elements)
    //     if (elements.name === item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }

    let result = cart.filter((elements)=>{
      return  elements.name === item.name

    })
    if (result.length){
      setIsAdded(true)
    }else {
      setIsAdded(false)
    }
  }, [cart]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 24, color: 'black'}}>{item.name}</Text>
      <Text style={{fontSize: 24, color: 'black'}}>{item.price}</Text>
      <Text style={{fontSize: 24, color: 'black'}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddtocart(item)} />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
