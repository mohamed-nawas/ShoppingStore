import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const Section1 = styled.View`
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding-left: ${rem(10)}px;
  padding-right: ${rem(10)}px;
  padding-top: ${rem(28)}px;
`;

export const Section2 = styled.View`
  width: 100%;
  height: 32%;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
`;

export const Section3 = styled.View`
  width: 100%;
  height: 47%;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section4 = styled.TouchableOpacity`
  width: 90%;
  height: 20%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: ${rem(15)}px;
  padding-left: ${rem(20)}px;
  padding-right: ${rem(20)}px;
`;

export const Section5 = styled.View`
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
`;

export const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props => (props.size ? rem(props.size) : rem(20))}px;
`;

export const ProfileOuterBorder = styled.View`
  height: ${rem(240)}px;
  width: ${rem(240)}px;
  border-radius: ${rem(120)}px;
  border-width: ${rem(2)}px;
  border-color: #c3e5f6;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
`;

export const ProfileInnerBorder = styled.View`
  height: ${rem(180)}px;
  width: ${rem(180)}px;
  border-radius: ${rem(90)}px;
  border-width: ${rem(2)}px;
  border-color: #98c9e0;
  background-color: #f4f2f2;
  justify-content: center;
  align-items: center;
`;

export const ProfileCircle = styled.View`
  height: ${rem(120)}px;
  width: ${rem(120)}px;
  border-radius: ${rem(60)}px;
  border-width: ${rem(2)}px;
  border-color: #f6b0cd;
  background-color: #fbc5d8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
