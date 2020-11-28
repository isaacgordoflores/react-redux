import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './components/ListItem';
import Input from './components/Input';
import { complete, submit } from './reducers/todos';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

const App = ({ data, complete, submit }) => { // submit de mapDispatchToProps

  const [value, setValue] = useState('') // defino value y setValue a traves del hook useState, con un valor inicial de vacio

  /**
   * Actualizo el estado de handleChange con setValue y el valor val
   */
  const handleChange = (val) => {
    setValue(val)
  }

  /**
   * 
   */
  const handleSubmit = () => {
    submit(value)
    setValue('')
  }

    return ( 
      /**
       * Capturo lo que el usuario escriba dentro del input
       * y lo almaceno en el hook onChange
       */
      <View style={styles.container}>
        <Input onsubmit={handleSubmit} onChange={handleChange} value={value} />
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={x => String(x.id)}
          renderItem={({ item }) => 
            <ListItem completed={item.completed} onPress={() => complete(item.id)} desc={item.desc} />
          }
        />
      </View>
    )
}

const mapStateToProps = state => { // se recarga de obtener los datos del estado
    console.log('state', state);
    return { data: state.todos }
}

const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(submit(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

  