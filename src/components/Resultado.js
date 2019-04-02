import React, { Component } from 'react';
import { View, Image } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
    constructor(props){
        super(props);
        this.state = {resultado: ''};
    }
    componentDidMount() {
        const numeroAleatorio = Math.floor(Math.random()*2);
        let caraCoroa;
        if(numeroAleatorio === 0) {
            caraCoroa = 'cara';
        } else {
           caraCoroa = 'coroa';
        }

        this.setState({resultado: caraCoroa});
    }

    render(){
        if(this.state.resultado === 'cara') {
            return(
            <View style={Estilo.view}>
                <Image source={cara} />
            </View>
            );
        }
        return(
            <View style={Estilo.view}>
                <Image source={coroa} />
            </View>
        );
    }
};

const Estilo = {
    view:{
        backgroundColor:'#61BD8C',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
}