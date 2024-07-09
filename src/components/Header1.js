import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header1 = () => {

  // UseSelector hook is use to select the data from the reducer ..
  const {cart} = useSelector(state => state.reducer);
  //console.warn(cartData)

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart]);
  
  return (
    <View style={styles.styleforheader}>
      <Text
        style={{fontSize: 24, textAlign: 'right', backgroundColor: 'orange',padding:10}}>
        
      

      <View style={{backgroundColor:'yellow', borderRadius:20,height:40,width:40}}> 
        <Text style={{fontSize:24, textAlign:'center', fontWeight:'600'}}>
          {cartItems}
        </Text>
      </View>
      </Text>
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({
  styleforheader: {
    marginTop: 30,
  },
});
