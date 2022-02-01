import React from 'react';
import {Platform, View, Image} from 'react-native';
import {
  Button,
  CardSelectionView,
  PaymentSelectionView,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
} from '../styles/Checkout-style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react-native';

const Checkout = () => {
  const [sendReceipt, setSendReceipt] = React.useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Section1>
        <Ionicons name="chevron-back" color="#2c2c2c" size={25} />
        <Text>Payment Details</Text>
        <Feather name="info" color="#2c2c2c" size={25} />
      </Section1>
      <Section2>
        {Platform.OS === 'ios' ? (
          <Text
            weight="normal"
            size={18}
            style={{width: '100%', height: '10%'}}>
            Credit Card
          </Text>
        ) : (
          <Text
            weight="normal"
            size={15}
            style={{width: '100%', height: '10%'}}>
            Credit Card
          </Text>
        )}
        <CardSelectionView>
          <Image
            source={require('../assets/visa.png')}
            style={{width: 50, aspectRatio: 1}}
            resizeMode="cover"
          />
          <Image
            source={require('../assets/master.png')}
            style={{width: 50, aspectRatio: 1}}
            resizeMode="cover"
          />
          <Image
            source={require('../assets/paypal.png')}
            style={{width: 50, aspectRatio: 1}}
            resizeMode="cover"
          />
        </CardSelectionView>
        <Image
          source={require('../images/visa_card.png')}
          style={{height: '55%', aspectRatio: 311 / 194}}
          resizeMode="cover"
        />
        {Platform.OS === 'ios' ? (
          <Text
            color="#4264cb"
            weight="normal"
            size={15}
            style={{
              height: '10%',
              paddingTop: 5,
            }}>
            add new card
          </Text>
        ) : (
          <Text
            color="#4264cb"
            weight="normal"
            size={12}
            style={{height: '10%'}}>
            add new card
          </Text>
        )}
      </Section2>
      <Section3>
        <PaymentSelectionView>
          {Platform.OS === 'ios' ? (
            <Text weight="normal" size={17}>
              Google Pay
            </Text>
          ) : (
            <Text weight="normal" size={14}>
              Google Pay
            </Text>
          )}
          <MaterialIcons name="arrow-forward-ios" size={20} />
        </PaymentSelectionView>
        <PaymentSelectionView>
          {Platform.OS === 'ios' ? (
            <Text weight="normal" size={17}>
              Debit Card
            </Text>
          ) : (
            <Text weight="normal" size={14}>
              Debit Card
            </Text>
          )}
          <MaterialIcons name="arrow-forward-ios" size={20} />
        </PaymentSelectionView>
        <PaymentSelectionView>
          {Platform.OS === 'ios' ? (
            <Text weight="normal" size={17}>
              Mobile Banking
            </Text>
          ) : (
            <Text weight="normal" size={14}>
              Mobile Banking
            </Text>
          )}
          <MaterialIcons name="arrow-forward-ios" size={20} />
        </PaymentSelectionView>
      </Section3>
      <Section4>
        {Platform.OS === 'ios' ? (
          <Text size={18}>Send receipt to email</Text>
        ) : (
          <Text size={15}>Send receipt to email</Text>
        )}
        <ToggleSwitch
          isOn={sendReceipt}
          onColor="#3e3e3e"
          offColor="#acbff7"
          size="small"
          onToggle={() => setSendReceipt(!sendReceipt)}
        />
      </Section4>
      <Section5>
        <Button>
          {Platform.OS === 'ios' ? (
            <Text color="#ffffff" size={18}>
              Pay Now
            </Text>
          ) : (
            <Text color="#ffffff" size={15}>
              Pay Now
            </Text>
          )}
        </Button>
      </Section5>
    </View>
  );
};

export default Checkout;
