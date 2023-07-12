import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({data}) {
 return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.date}>{data.data}</Text>

    <View styles={styles.content}>

    </View>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {

    }
})