import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const App = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ height: 250, flex: 1 }} source={require('./assets/bg.jpg')} />
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 20 }}>Que hacer en Paris</Text>
      </View>

      <ScrollView horizontal>
        <View>
          <Image style={styles.imagen} source={require('./assets/actividad1.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./assets/actividad2.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./assets/actividad3.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./assets/actividad4.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./assets/actividad5.jpg')} />
        </View>
      </ScrollView>

      <View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 20 }}>Los Mejores Alojamientos</Text>
      </View>

      <View>
        <View>
          <Image style={styles.mejores} source={require('./assets/mejores1.jpg')} />
        </View>
        <View>
          <Image style={styles.mejores} source={require('./assets/mejores2.jpg')} />
        </View>
        <View>
          <Image style={styles.mejores} source={require('./assets/mejores3.jpg')} />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 20 }}>Hospedajes</Text>
      </View>

      <View style={styles.containerHospedajes}>
        <View style={styles.hospedajes}>
          <Image style={styles.mejores} source={require('./assets/hospedaje1.jpg')} />
        </View>
        <View style={styles.hospedajes}>
          <Image style={styles.mejores} source={require('./assets/hospedaje2.jpg')} />
        </View>
        <View style={styles.hospedajes}>
          <Image style={styles.mejores} source={require('./assets/hospedaje3.jpg')} />
        </View>
        <View style={styles.hospedajes}>
          <Image style={styles.mejores} source={require('./assets/hospedaje4.jpg')} />
        </View>
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imagen: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  containerHospedajes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  hospedajes: {
    flexBasis: '48%',
  }
});

export default App


// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// npm install @shopify/react-native-skia



