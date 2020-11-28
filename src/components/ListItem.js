import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee'
    },
    text: {
        fontSize: 20,
    },
})

export default({ desc, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {desc}
            </Text>
        </TouchableOpacity>
    )
}