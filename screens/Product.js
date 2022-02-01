import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
  Platform,
} from 'react-native';
import {
  ColorPicker,
  ColorPickerBorder,
  DiscountLabel,
  ProductPictureStyles,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
  ProductSizeContainer,
} from '../styles/Product-style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Products} from './StockData';

const Product = ({navigation, route}) => {
  const [selectedSize, setSelectedSize] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(null);

  const productID = route.params.productID;
  const productData = Products.find(element => element.id === productID);

  return (
    <View style={{flex: 1}}>
      <Section1>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-outline" color="#0b0d20" size={25} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text color="#3e45aa" weight="bold">
            X
          </Text>
          <Text color="#a0dbf5" weight="bold">
            E
          </Text>
        </View>
        <TouchableOpacity>
          {productData.favourite === 'yes' ? (
            <Ionicons name="heart-circle-sharp" color="#f75058" size={30} />
          ) : (
            <AntDesign name="heart" color="#B6B8C7" size={30} />
          )}
        </TouchableOpacity>
      </Section1>
      <Section2>
        {productData.discount !== 'none' ? (
          <DiscountLabel>
            <Text size={16} weight="bold">
              {productData.discount}
            </Text>
          </DiscountLabel>
        ) : null}
      </Section2>
      <Section3>
        <View style={ProductPictureStyles.innerBorder}>
          <View style={ProductPictureStyles.outerBorder}>
            <View style={ProductPictureStyles.outerCircle}>
              <View style={ProductPictureStyles.innerCircle}>
                <Image
                  source={productData.imageSrc}
                  style={{
                    height: '120%',
                    aspectRatio: 1,
                    resizeMode: 'cover',
                    position: 'relative',
                    bottom:
                      Platform.OS === 'ios'
                        ? (Dimensions.get('window').height / 380) * 8
                        : (Dimensions.get('window').height / 380) * 6,
                    left:
                      Platform.OS === 'ios'
                        ? (Dimensions.get('window').width / 380) * -8
                        : (Dimensions.get('window').width / 380) * -5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={ProductPictureStyles.sliderArea}>
          <TouchableOpacity style={ProductPictureStyles.sliderDot} />
          <TouchableOpacity style={ProductPictureStyles.sliderDot} />
          <TouchableOpacity style={ProductPictureStyles.sliderLine} />
          <TouchableOpacity style={ProductPictureStyles.sliderDot} />
          <TouchableOpacity style={ProductPictureStyles.sliderDot} />
        </View>
      </Section3>
      <Section4>
        <View style={ProductPictureStyles.innerS4}>
          <View style={ProductPictureStyles.productDesHeader}>
            <Text size={20} color="#494f86" weight="bold">
              {productData.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: (Dimensions.get('window').width / 380) * 60,
              }}>
              <AntDesign name="star" size={18} color="#fdd446" />
              <Text size={15} color="#acacbc" weight="bold">
                ({productData.rating})
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: (Dimensions.get('window').width / 380) * 20,
              paddingRight: (Dimensions.get('window').width / 380) * 20,
              height: '25%',
              justifyContent: 'center',
            }}>
            <Text size={15} color="#7176a1" weight="bold">
              Built for natural motion, the Nike Flex shoes
            </Text>
          </View>
          <View style={ProductPictureStyles.productDesSize}>
            <Text color="#9697ac" weight="bold">
              Size
            </Text>
            {productData.size.map(e =>
              selectedSize === e ? (
                <ProductSizeContainer
                  active
                  key={e}
                  onPress={() => setSelectedSize(e)}>
                  <Text color="#151728" weight="bold">
                    {e}
                  </Text>
                </ProductSizeContainer>
              ) : (
                <ProductSizeContainer
                  key={e}
                  onPress={() => setSelectedSize(e)}>
                  <Text color="#151728" weight="bold">
                    {e}
                  </Text>
                </ProductSizeContainer>
              ),
            )}
          </View>
          <View style={ProductPictureStyles.productDesColor}>
            <Text color="#9e9fb2" size={18} weight="bold">
              Available Color
            </Text>
            {productData.color.map(e =>
              selectedColor === e[0] ? (
                <ColorPickerBorder
                  color="#c5c4d1"
                  key={e}
                  onPress={() => setSelectedColor(e[0])}>
                  <ColorPicker color={e[0]} />
                </ColorPickerBorder>
              ) : (
                <ColorPickerBorder
                  color={e[1]}
                  key={e}
                  onPress={() => setSelectedColor(e[0])}>
                  <ColorPicker color={e[0]} />
                </ColorPickerBorder>
              ),
            )}
          </View>
        </View>
      </Section4>
      <Section5>
        <View style={ProductPictureStyles.innerS5}>
          <Text size={18} color="#030519" weight="bold">
            {productData.price}
          </Text>
          <TouchableOpacity
            style={ProductPictureStyles.cartBtn}
            onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="cart" color="#4e55af" size={20} />
            <Text size={15} color="#4e55af" weight="bold">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </Section5>
    </View>
  );
};

export default Product;
