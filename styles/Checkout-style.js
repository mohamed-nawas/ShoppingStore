import {Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components';

const rem = v => (Dimensions.get('window').width / 380) * v;

export const Section1 = styled.View`
  width: ${Platform.OS === 'ios' ? '80%' : '90%'};
  height: 10%;
  background-color: #fafafa;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Platform.OS === 'ios' ? rem(28) : '0'}px;
`;

export const Section2 = styled.View`
  width: ${Platform.OS === 'ios' ? '80%' : '90%'};
  height: ${Platform.OS === 'ios' ? '35%' : '33%'};
  background-color: #fafafa;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${Platform.OS === 'ios' ? '10%' : '5%'};
  padding-right: ${Platform.OS === 'ios' ? '10%' : '5%'};
`;

export const Section3 = styled.View`
  width: ${Platform.OS === 'ios' ? '80%' : '90%'};
  height: ${Platform.OS === 'ios' ? '25%' : '24%'};
  background-color: #fafafa;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: ${Platform.OS === 'ios' ? '10%' : '5%'};
  padding-right: ${Platform.OS === 'ios' ? '10%' : '5%'};
`;

export const Section4 = styled.View`
  width: ${Platform.OS === 'ios' ? '80%' : '90%'};
  height: 7%;
  background-color: #fafafa;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section5 = styled.View`
  width: ${Platform.OS === 'ios' ? '80%' : '90%'};
  height: 10%;
  background-color: #fafafa;
  justify-content: center
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${props =>
    props.size ? props.size : Platform.OS === 'ios' ? rem(20) : rem(18)}px;
  color: ${props => (props.color ? props.color : '#2c2c2c')};
  font-weight: ${props => (props.weight ? props.weight : 'bold')};
`;

export const Button = styled.TouchableOpacity`
  width: ${Platform.OS === 'ios' ? '60%' : '50%'};
  height: ${Platform.OS === 'ios' ? '50%' : '60%'};
  justify-content: center;
  align-items: center;
  background-color: #7200b6;
  border-radius: ${rem(30)}px;
`;

export const CardSelectionView = styled.View`
  width: 100%;
  height: 25%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const PaymentSelectionView = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
`;
