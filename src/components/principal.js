import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation' ;

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');

import SobreJogos from './sobreJogos';
import OutrosJogos from './outrosJogos';
import CenaResultado from './Resultado';

class CenaPrincipal extends Component {
  render() {
    return (
      <View style={Estilo.Principal}>
        <View style={Estilo.Meio}>
          <Image
            source={logo}
          />
          <TouchableHighlight
            underlayColor= {'#61BD8C'}
            activeOpacity= {1}
            onPress={() => {this.props.navigation.push('Resultado')}}
          >
            <Image
              source={btnJogar}
            />
          </TouchableHighlight>
        </View>
        <View style={Estilo.rodaPe}>
          <TouchableHighlight
            underlayColor= {'#61BD8C'}
            activeOpacity= {1}
            onPress={() => {this.props.navigation.push('Sobre')}}
          >
              <Image source={btnSobre} />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor= {'#61BD8C'}
            activeOpacity= {1}
            onPress={() => {this.props.navigation.push('Outros')}}
          >
            <Image source={btnOutros} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const Estilo = {
  Principal:{
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'space-between'
  },
  Meio:{
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rodaPe:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15
  }
}

const Cenas = createStackNavigator(
  {
    Principal:{
      screen: CenaPrincipal,
      navigationOptions:{
        title: '\t\t\t\t\t\t\t\t\t\t\tCara Coroa'
      }
    },
    Sobre:{
      screen: SobreJogos,
      navigationOptions:{
        title: '\t\t\t\t\t\t\t\tSobre'
      }
    },
    Outros:{
      screen: OutrosJogos,
      navigationOptions:{
        title: '\t\t\t\t\t\tOutros Jogos'
      }
    },
    Resultado:{
      screen: CenaResultado,
      navigationOptions:{
        title: '\t\t\t\t\t\tResultado'
      }
    }
  },
  {
    initialRoute: 'Principal'
  }
);

export default class Rota extends Component {
  render(){
    return(
      <Cenas/>
    );
  }
};