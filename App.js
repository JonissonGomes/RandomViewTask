import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      textoTask: null,
      img: require('./src/img/sucesso.png'),
      startTask: 'Visualizar Task',
      message: 'Aperte o botão, para ver seu desafio'
    }

    this.task = [
      'Criar um rotina de estudos',
      'Fazer 20 agachamentos',
      'Criar um app de clima',
      'Aprender React Native',
      'Criar uma rotina fitness',
      'Jogar God of War',
      'Atualizar o linkedIn',
      'Fazer o dever de casa'
    ];

    this.viewTask = this.viewTask.bind(this);
  }

  viewTask() {
    let randomIndex = Math.floor(Math.random() * this.task.length);
    let newImage = require('./src/img/start.png')

    this.setState({
      textoTask: this.task[randomIndex],
      img: newImage,
      startTask: 'Nova Task',
      message: 'Aperte o botão, para ver seu novo desafio'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.title}>{this.state.message}</Text>
        <Text style={styles.task}>{this.state.textoTask}</Text>

        <TouchableOpacity style={styles.button} onPress={this.viewTask}>
          <View>
            <Text style={styles.buttonText}>{this.state.startTask}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
  },
  img: {
    height: 120,
    width: 120,
    marginTop: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 16
  },
  task: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 2, borderColor: '#a4f13e',
    marginTop: 30,
    padding: 15,
  },
  buttonText: {
    color: '#a4f13e',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default App;
