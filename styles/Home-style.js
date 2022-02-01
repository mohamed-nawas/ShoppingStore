import {Dimensions, StyleSheet, Platform} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const Section1 = styled.View`
  width: 100%;
  height: 10%;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem(10)}px;
  padding-right: ${rem(10)}px;
  padding-top: ${Platform.OS === 'ios' ? rem(28) : rem(0)}px;
`;

export const Section2 = styled.View`
  width: 100%;
  height: 10%;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem(10)}px;
  padding-right: ${rem(10)}px;
`;

export const Section4 = styled.View`
  width: 100%;
  height: 15%;
  background-color: #f7f7f7;
  flex-direction: row;
  align-items: center;
`;

export const Section5 = styled.View`
  width: 100%;
  height: 70%
  background-color: #f7f7f7;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-left: ${rem(15)}px;
  padding-right: ${rem(15)}px;
  padding-bottom: ${rem(20)}px;
`;

export const Section3 = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props =>
    props.size ? rem(props.size) : Platform.OS === 'ios' ? rem(20) : rem(18)}px;
`;

export const CategoryCard = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: ${rem(15)}px;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem(15)}px;
  padding-right: ${rem(15)}px;
  margin-right: ${rem(15)}px;
  elevation: ${props => (props.active ? rem(30) : 0)};
  shadow-color: ${props =>
    props.active === true
      ? Platform.OS === 'ios'
        ? '#e8e6ec'
        : '#e4e4e4'
      : '#f7f7f7'};
  shadow-opacity: 1;
  shadow-radius: 5px;
`;

export const ProductCard = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: ${rem(15)}px;
  width: ${rem(165)}px;
  height: ${rem(250)}px;
  margin-bottom: ${rem(35)}px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const DiscountLabel = styled.View`
  padding: ${rem(3)}px;
  border-radius: ${rem(5)}px;
  background-color: #a1dbf5;
  justify-content: center;
  align-items: center;
`;

export const ProductHeader = styled.View`
  width: 100%;
  height: 13%;
  padding-left: ${rem(10)}px;
  padding-right: ${rem(10)}px;
  border-top-right-radius: ${rem(15)}px;
  border-top-left-radius: ${rem(15)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPicture = styled.View`
  width: 100%;
  height: 48%;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.View`
  width: 100%;
  height: 13%;
  justify-content: center;
  align-items: center;
`;

export const ProductPrice = styled.View`
  width: 100%;
  height: 13%;
  justify-content: center;
  align-items: center;
`;

export const ProductRating = styled.View`
  width: 100%;
  height: 13%;
  border-bottom-right-radius: ${rem(15)}px;
  border-bottom-left-radius: ${rem(15)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductPictureStyles = StyleSheet.create({
  border: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '95%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#fddfce',
    borderRadius: (Dimensions.get('window').width / 100) * 50,
  },
  circle: {
    backgroundColor: '#fddfce',
    height: '95%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#fddfce',
    borderRadius: (Dimensions.get('window').width / 100) * 50,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    position: 'relative',
    resizeMode: 'cover',
    bottom:
      Platform.OS === 'ios'
        ? (Dimensions.get('window').height / 380) * 2
        : (Dimensions.get('window').height / 380) * 2,
    left:
      Platform.OS === 'ios'
        ? (Dimensions.get('window').width / 380) * 3
        : (Dimensions.get('window').width / 380) * 3,
  },
});
