import {Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const Section1 = styled.View`
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem(10)}px;
  padding-right: ${rem(10)}px;
  padding-top: ${Platform.OS === 'ios' ? rem(28) : rem(0)}px;
`;

export const Section2 = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? '65%' : '62%'};
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Section3 = styled.View`
  width: 100%;
  height: 100%;
  background-color: #e8e7eb;
  border-top-left-radius: ${rem(35)}px;
  border-top-right-radius: ${rem(35)}px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: ${rem(20)}px;
  padding-right: ${rem(20)}px;
  padding-top: ${rem(20)}px;
`;

export const Section4 = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? '17%' : '13%'};
  background-color: #e8e7eb;
  justify-content: center;
  align-items: center;
`;

export const Section5 = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: ${rem(35)}px;
  border-top-right-radius: ${rem(35)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem(25)}px;
  padding-right: ${rem(25)}px;
`;

export const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props =>
    props.size
      ? rem(props.size)
      : Platform.OS === 'ios'
      ? rem(17)
      : rem(15)}px; ;
`;

export const CheckoutBtn = styled.TouchableOpacity`
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #5e31b2;
  border-radius: ${rem(25)}px;
  padding: ${rem(10)}px;
  elevation: ${props => (props.active ? rem(30) : 0)};
  shadow-color: #dddae5;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
`;

export const CartCard = styled.View`
  width: 100%;
  height: ${rem(90)}px;
  border-radius: ${rem(25)}px;
  margin-bottom: ${rem(20)}px;
  background-color: #ffffff;
  padding-left: ${rem(15)}px;
  padding-right: ${rem(15)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartImgBorder = styled.View`
  height: ${rem(72)}px;
  aspect-ratio: 1;
  border-radius: ${rem(36)}px;
  border-width: 2px;
  border-color: #a2bea6;
  justify-content: center;
  align-items: center;
`;

export const CartImgCircle = styled.View`
  height: 90%;
  aspect-ratio: 1;
  border-radius: ${rem(36)}px;
  background-color: #a2bea6;
`;

export const CartImg = styled.Image`
  height: 90%;
  aspect-ratio: 1;
  position: relative;
  top: ${rem(10)}px;
  left: ${rem(5)}px;
`;

export const CartDetail = styled.View`
  height: 60%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CartQuantity = styled.View`
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CartQuantitySelector = styled.View`
  width: ${rem(16)}px;
  aspect-ratio: 1;
  background-color: ${props => (props.selected ? '#9cd9f7' : '#ffffff')};
  border-radius: ${rem(8)}px;
  justify-content: center;
  align-items: center;
`;

export const CartPrice = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: ${rem(45)}px;
`;

export const CartPriceInner = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
