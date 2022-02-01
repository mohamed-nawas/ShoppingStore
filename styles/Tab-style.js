import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const IconText = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props => (props.size ? rem(props.size) : rem(20))}px;
`;

export const TabBarIconView = styled.View`
  justify-content: center;
  align-items: center;
  top: ${rem(10)}px;
`;

export const IconImage = styled.Image`
  resize-mode: contain;
  width: ${rem(22)}px;
  height: ${rem(22)}px;
`;

export const CustomTabBtn = styled.TouchableOpacity`
  top: ${rem(-20)}px;
  justify-content: center;
  align-items: center;
`;

export const CustomTabBtnView = styled.View`
  width: ${rem(70)}px;
  height: ${rem(70)}px;
  border-radius: ${rem(35)}px;
  background-color: #e34f9c;
`;
