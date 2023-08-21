import React, {FC} from 'react';
import {View, Text, Button } from 'react-native';

interface DetailScreenProps {
    navigation: any;
  }

const DetailScreen : FC<DetailScreenProps> = ({ navigation }) => {
    return(
        <View>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default DetailScreen;