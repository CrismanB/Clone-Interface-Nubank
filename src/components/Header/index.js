import React from 'react';

import {Container, Top, Logo, Title} from './styles';
import logo from './../../assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  Icon.loadFont();
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Crisman</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}
