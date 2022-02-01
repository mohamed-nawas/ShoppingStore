import {Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const Section1 = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? '10%' : '5%'};
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
  height: 5%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Section3 = styled.View`
  width: 100%;
  height: 32%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: ${rem(15)}px;
`;

export const Section4 = styled.View`
  width: 100%;
  height: 32%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Section5 = styled.View`
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props =>
    props.size
      ? rem(props.size)
      : Platform.OS === 'ios'
      ? rem(20)
      : rem(15)}px; ;
`;

export const ColorPickerBorder = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${rem(40)}px;
  height: ${rem(40)}px;
  border-width: ${rem(15)}px;
  border-color: ${props => (props.color ? props.color : '#000')};
  border-radius: ${rem(20)}px;
`;

export const ColorPicker = styled.View`
  width: ${rem(30)}px;
  height: ${rem(30)}px;
  background-color: ${props => (props.color ? props.color : '#000')};
  border-radius: ${rem(15)}px;
`;

export const DiscountLabel = styled.View`
  padding: ${rem(5)}px;
  border-radius: ${rem(10)}px;
  background-color: #a1dbf5;
  justify-content: center;
  align-items: center;
`;

export const ProductSizeContainer = styled.TouchableOpacity`
  background-color: ${props => (props.active ? '#9cdaf7' : '#f7f7f7')};
  padding: ${rem(10)}px;
  border-radius: ${rem(10)}px;
`;

export const ProductPictureStyles = StyleSheet.create({
  outerBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '115%',
    aspectRatio: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: '#fddfce',
    borderRightColor: '#fddfce',
    borderRadius: (Dimensions.get('window').height / 100) * 50,
  },
  innerBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    aspectRatio: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: '#fddfce',
    borderRightColor: '#fddfce',
    borderRadius: (Dimensions.get('window').height / 100) * 50,
  },
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    aspectRatio: 1,
    backgroundColor: '#fddfce',
    borderRadius: (Dimensions.get('window').height / 100) * 50,
  },
  innerCircle: {
    height: '70%',
    aspectRatio: 1,
    backgroundColor: '#feebde',
    borderRadius: (Dimensions.get('window').height / 100) * 50,
  },
  sliderArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: (Dimensions.get('window').width / 380) * 10,
  },
  sliderDot: {
    width: (Dimensions.get('window').width / 380) * 10,
    height: (Dimensions.get('window').width / 380) * 10,
    marginRight: (Dimensions.get('window').width / 380) * 5,
    backgroundColor: '#dcecf3',
    borderRadius: Dimensions.get('window').width / 2,
    position: 'relative',
    top: -(Dimensions.get('window').width / 380) * 5,
    left: 0,
  },
  sliderLine: {
    width: (Dimensions.get('window').width / 380) * 30,
    height: (Dimensions.get('window').width / 380) * 10,
    marginRight: (Dimensions.get('window').width / 380) * 5,
    backgroundColor: '#A1DBF5',
    borderRadius: Dimensions.get('window').width / 2,
    position: 'relative',
    top: -(Dimensions.get('window').width / 380) * 5,
    left: 0,
  },
  innerS4: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  productDesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingTop: (Dimensions.get('window').width / 380) * 25,
    paddingLeft: (Dimensions.get('window').width / 380) * 20,
    paddingRight: (Dimensions.get('window').width / 380) * 20,
  },
  productDesSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingLeft: (Dimensions.get('window').width / 380) * 20,
    paddingRight: (Dimensions.get('window').width / 380) * 20,
  },
  productDesColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingLeft: (Dimensions.get('window').width / 380) * 20,
    paddingRight: (Dimensions.get('window').width / 380) * 20,
  },
  innerS5: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: (Dimensions.get('window').width / 380) * 20,
    paddingRight: (Dimensions.get('window').width / 380) * 20,
  },
  cartBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
    height: '85%',
    backgroundColor: '#f7f7f7',
    borderRadius: (Dimensions.get('window').width / 380) * 20,
    paddingLeft: (Dimensions.get('window').width / 380) * 8,
    paddingRight: (Dimensions.get('window').width / 380) * 8,
  },
});
