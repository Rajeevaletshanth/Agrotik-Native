import React, {FC} from 'react';
import {View, Text, Button } from 'react-native';

interface HomeScreenProps {
    navigation: any;
  }

const HomeScreen : FC<HomeScreenProps> = ({ navigation }) => {
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to details" onPress={() => navigation.navigate("Details")} />
        </View>
    )
}

export default HomeScreen;