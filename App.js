import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>PROGRAMAÇÃO MOBILE</Text>
      <Text style={styles.p1}>Com a utilização de aparelhos celulares, podemos fazer programações para este dispositvo.</Text>
      <Text style={styles.title1}>APLICATIVOS</Text>
      <Text style={styles.subtitle1}>Utilizamos o Prompt de comando, node.js e yarn.</Text>
      <Text style={styles.title2}>COMO INSTALAR</Text>
      <Text style={styles.subtitle2}>Você deverá usar o comando no cmd. Yarn start</Text>
      <Text style={styles.title3}>USE O VSCODE</Text>
      <Text style={styles.subtitle3}>Faça a sua programação usando o VSCODE</Text>
      <Text style={styles.img}>IMAGEM</Text>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

  },

  p1: {
    marginTop: 20,
  },

  title1: {

    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 75,
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,
  },
  subtitle1: {
    display: 'flex',
    width: '100%',
    paddingLeft: 10,
    paddingBottom: 50,
  },
  title2: {

    alignItems: 'flex-start',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,
  },
  subtitle2: {

    display: 'flex',
    width: '100%',
    padding: 10,
    paddingBottom: 50,
  },
  title3: {
    alignItems: 'flex-start',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,

  },
  subtitle3: {

    display: 'flex',
    width: '100%',
    padding: 10,
    paddingBottom: 50,
  },
  img: {
    backgroundColor: 'red',
    width: '100%',
    height: 350,
    paddingLeft: 170,
    paddingTop: 130,
    fontWeight: 'bold',
  },


});


