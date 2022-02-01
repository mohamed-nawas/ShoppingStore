import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  CartCard,
  CartDetail,
  CartImg,
  CartImgBorder,
  CartImgCircle,
  CartPrice,
  CartPriceInner,
  CartQuantity,
  CartQuantitySelector,
  CheckoutBtn,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
} from '../styles/Cart-style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {MyCart} from './MyCart';

const Cart = ({navigation}) => {
  let calcPrice = 0;
  for (let i = 0; i < MyCart.length; i++) {
    const element = MyCart[i];
    const price = parseInt(element.price.slice(1));
    const qty = element.currentQty;
    calcPrice = calcPrice + price * qty;
  }

  return (
    <View style={{flex: 1}}>
      <Section1>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#0b0d20" size={25} />
        </TouchableOpacity>
        <Text color="#100a22" weight="bold">
          My Cart
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete" color="#b9b6c9" size={25} />
        </TouchableOpacity>
      </Section1>
      <Section2>
        <Section3>
          <FlatList
            style={{width: '100%', height: '100%'}}
            showsVerticalScrollIndicator={false}
            data={MyCart}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CartCard>
                <CartImgBorder>
                  <CartImgCircle>
                    <CartImg source={item.image} />
                  </CartImgCircle>
                </CartImgBorder>
                <CartDetail>
                  <Text color="#5200ad" weight="bold">
                    {item.name}
                  </Text>
                  <Text color="#5200ad" weight="bold">
                    {item.price}
                  </Text>
                </CartDetail>
                <CartQuantity>
                  <CartQuantitySelector selected>
                    <AntDesign name="minus" color="#000" size={15} />
                  </CartQuantitySelector>
                  <CartQuantitySelector>
                    <Text size={18}>{item.currentQty}</Text>
                  </CartQuantitySelector>
                  <CartQuantitySelector>
                    <AntDesign name="plus" color="#000" size={15} />
                  </CartQuantitySelector>
                </CartQuantity>
              </CartCard>
            )}
          />
        </Section3>
      </Section2>
      <Section4>
        <Section5>
          <Text weight="bold" color="#262330">
            ${calcPrice}
          </Text>
          <CheckoutBtn
            onPress={() => navigation.navigate('Checkout')}
            style={{
              shadowOffset: {
                width: -12,
                height: 10,
              },
            }}>
            <MaterialIcons name="payments" color="#bfe7f7" size={20} />
            <Text color="#bfe7f7" weight="bold" size={18}>
              Check Out
            </Text>
          </CheckoutBtn>
        </Section5>
      </Section4>
    </View>
  );
};

export default Cart;
