import { View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.replace('HomeScreen');
    }, 3000);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={{uri:'https://mywishindia.in/public/uploads/all/1hpehxO7QdjIyj2UEY0P1zC3b3SxYLwbe2xprQGj.png'}}
      style={{height:100,width:'60%'}}></Image>

    </View>
  )
}

export default SplashScreen