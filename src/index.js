import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

const data = [
  { id: 1, desc: 'Texto de Prueba', completed: false },
  { id: 2, desc: 'Otro Texto de Prueba @ á <>', completed: false},
]

export default () => {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={x => String(x.id)}
          renderItem={({ item }) => 
            <ListItem onPress={() => {}} desc={item.desc} />
          }
        />
      </View>
    )
  }


  