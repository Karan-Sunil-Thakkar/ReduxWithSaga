import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserList} from './redux/action' 

const UserList = () => {

    const dispatch = useDispatch();
    const {fakestore} = useSelector((state)=>state.reducer)
    console.warn('fakestore',fakestore);


    useEffect(()=>{
        dispatch(getUserList())
    },[])

    // console.warn(userList);

  return (
    <View>
      <Text>User List ...</Text>
    {
        fakestore.length? 
        fakestore.map((item)=>(<Text style={{fontSize:18}}>{item.title}</Text>))
        : null 
    }
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})