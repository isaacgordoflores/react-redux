import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 20,
    },
    strike : {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },  
})

export default({ desc, onPress, completed }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {completed ? 
                <Text style={[styles.text, styles.strike]}>
                    {desc}
                </Text>
                :
                <Text style={styles.text}>
                    {desc}
                </Text>
            }
        </TouchableOpacity>
    )
}