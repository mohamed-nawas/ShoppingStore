import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Text,
  Section1,
  Section2,
  Section3,
  Section4,
  CategoryCard,
  Section5,
  ProductCard,
  ProductHeader,
  ProductPicture,
  ProductName,
  ProductPrice,
  ProductRating,
  DiscountLabel,
  ProductPictureStyles,
} from '../styles/Home-style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Products} from './StockData';

const Home = ({navigation}) => {
  const [isSneakersActive, setIsSneakersActive] = React.useState(false);
  const [isWatchActive, setIsWatchActive] = React.useState(false);
  const [isBackpackActive, setIsBackpackActive] = React.useState(false);

  const screenWidth = Dimensions.get('window').width;
  const Sneakers = Products.filter(e => e.category === 'shoe');
  const Watches = Products.filter(e => e.category === 'watch');
  const Backpacks = Products.filter(e => e.category === 'backpack');

  const renderProductRating = rating => {
    if (rating === 0.5) {
      return (
        <ProductRating>
          <FontAwesome name="star-half-empty" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 1) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 1.5) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <FontAwesome name="star-half-empty" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 2) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 2.5) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <FontAwesome name="star-half-empty" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 3) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 3.5) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <FontAwesome name="star-half-empty" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 4) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="staro" color="#f0e8c9" size={18} />
        </ProductRating>
      );
    }
    if (rating === 4.5) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <FontAwesome name="star-half-empty" color="#fdd344" size={18} />
        </ProductRating>
      );
    }
    if (rating === 5) {
      return (
        <ProductRating>
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
          <AntDesign name="star" color="#fdd344" size={18} />
        </ProductRating>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <Section1>
        <TouchableOpacity>
          {Platform.OS === 'ios' ? (
            <FontAwesome5 name="grip-horizontal" size={25} color="#000" />
          ) : (
            <FontAwesome5 name="grip-horizontal" size={20} color="#000" />
          )}
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text color="#3E45AA" weight="bold">
            X
          </Text>
          <Text color="#A1DBF5" weight="bold">
            E
          </Text>
        </View>
        <TouchableOpacity>
          {Platform.OS === 'ios' ? (
            <Ionicons name="search-sharp" size={25} color="#000" />
          ) : (
            <Ionicons name="search-sharp" size={20} color="#000" />
          )}
        </TouchableOpacity>
      </Section1>
      <Section2>
        {Platform.OS === 'ios' ? (
          <Text size={27} weight="bold">
            Our Product
          </Text>
        ) : (
          <Text size={21} weight="bold">
            Our Product
          </Text>
        )}
        {Platform.OS === 'ios' ? (
          <Section3>
            <Text size={15} weight="bold" color="#A9AABB">
              Sort By
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color="#A9AABB"
            />
          </Section3>
        ) : (
          <Section3>
            <Text size={13} weight="bold" color="#A9AABB">
              Sort By
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={17}
              color="#A9AABB"
            />
          </Section3>
        )}
      </Section2>
      <Section4>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: (Dimensions.get('window').height / 100) * 15,
            paddingBottom: (Dimensions.get('window').height / 100) * 3,
            paddingLeft: (Dimensions.get('window').width / 100) * 3,
          }}>
          <CategoryCard
            style={{
              shadowOffset: {
                width: 12,
                height: 20,
              },
            }}
            onPress={() => {
              setIsSneakersActive(!isSneakersActive);
              setIsWatchActive(false);
              setIsBackpackActive(false);
            }}
            active={isSneakersActive}>
            <Image
              source={require('../images/sneekers.png')}
              style={{width: 30, aspectRatio: 1, resizeMode: 'cover'}}
            />
            <Text style={{marginLeft: 10}} color="#303487" weight="bold">
              Sneakers
            </Text>
          </CategoryCard>
          <CategoryCard
            style={{
              shadowOffset: {
                width: 12,
                height: 20,
              },
            }}
            active={isWatchActive}
            onPress={() => {
              setIsWatchActive(!isWatchActive);
              setIsSneakersActive(false);
              setIsBackpackActive(false);
            }}>
            <Image
              source={require('../images/watch.png')}
              style={{width: 30, aspectRatio: 1, resizeMode: 'cover'}}
            />
            <Text style={{marginLeft: 10}} color="#434554" weight="bold">
              Watch
            </Text>
          </CategoryCard>
          <CategoryCard
            style={{
              shadowOffset: {
                width: 12,
                height: 20,
              },
            }}
            active={isBackpackActive}
            onPress={() => {
              setIsBackpackActive(!isBackpackActive);
              setIsSneakersActive(false);
              setIsWatchActive(false);
            }}>
            <Image
              source={require('../images/backpack.png')}
              style={{width: 30, aspectRatio: 1, resizeMode: 'cover'}}
            />
            <Text style={{marginLeft: 10}} color="#434554" weight="bold">
              Backpack
            </Text>
          </CategoryCard>
        </ScrollView>
      </Section4>
      <Section5 style={{paddingLeft: 0, paddingRight: 0}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isSneakersActive ? (
            <Section5 style={{paddingLeft: 0, paddingRight: 0}}>
              {Sneakers.map(element => (
                <ProductCard
                  key={element.id}
                  onPress={() =>
                    navigation.navigate('Product', {
                      productID: element.id,
                    })
                  }>
                  <ProductHeader>
                    {element.discount === 'none' ? (
                      <DiscountLabel style={{backgroundColor: '#fff'}} />
                    ) : (
                      <DiscountLabel>
                        <Text size={13} weight="bold">
                          {element.discount}
                        </Text>
                      </DiscountLabel>
                    )}
                    {element.favourite === 'yes' ? (
                      <Ionicons name="heart-circle" color="#F75058" size={20} />
                    ) : (
                      <AntDesign name="heart" color="#B6B8C7" size={15} />
                    )}
                  </ProductHeader>
                  <ProductPicture>
                    <View style={ProductPictureStyles.border}>
                      <View style={ProductPictureStyles.circle}>
                        <Image
                          style={ProductPictureStyles.image}
                          source={element.imageSrc}
                        />
                      </View>
                    </View>
                  </ProductPicture>
                  <ProductName>
                    <Text color="#3D44AA" weight="bold">
                      {element.name}
                    </Text>
                  </ProductName>
                  <ProductPrice>
                    <Text color="#3D44AA" weight="bold">
                      {element.price}
                    </Text>
                  </ProductPrice>
                  {renderProductRating(element.rating)}
                </ProductCard>
              ))}
            </Section5>
          ) : isWatchActive ? (
            <Section5 style={{paddingLeft: 0, paddingRight: 0}}>
              {Watches.map(element => (
                <ProductCard
                  key={element.id}
                  onPress={() =>
                    navigation.navigate('Product', {
                      productID: element.id,
                    })
                  }>
                  <ProductHeader>
                    {element.discount === 'none' ? (
                      <DiscountLabel style={{backgroundColor: '#fff'}} />
                    ) : (
                      <DiscountLabel>
                        <Text size={13} weight="bold">
                          {element.discount}
                        </Text>
                      </DiscountLabel>
                    )}
                    {element.favourite === 'yes' ? (
                      <Ionicons name="heart-circle" color="#F75058" size={20} />
                    ) : (
                      <AntDesign name="heart" color="#B6B8C7" size={15} />
                    )}
                  </ProductHeader>
                  <ProductPicture>
                    <View style={ProductPictureStyles.border}>
                      <View style={ProductPictureStyles.circle}>
                        <Image
                          source={element.imageSrc}
                          style={ProductPictureStyles.image}
                        />
                      </View>
                    </View>
                  </ProductPicture>
                  <ProductName>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.name}
                    </Text>
                  </ProductName>
                  <ProductPrice>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.price}
                    </Text>
                  </ProductPrice>
                  {renderProductRating(element.rating)}
                </ProductCard>
              ))}
            </Section5>
          ) : isBackpackActive ? (
            <Section5 style={{paddingLeft: 0, paddingRight: 0}}>
              {Backpacks.map(element => (
                <ProductCard
                  key={element.id}
                  onPress={() =>
                    navigation.navigate('Product', {
                      productID: element.id,
                    })
                  }>
                  <ProductHeader>
                    {element.discount === 'none' ? (
                      <DiscountLabel style={{backgroundColor: '#fff'}} />
                    ) : (
                      <DiscountLabel>
                        <Text size={13} weight="bold">
                          {element.discount}
                        </Text>
                      </DiscountLabel>
                    )}
                    {element.favourite === 'yes' ? (
                      <Ionicons name="heart-circle" color="#F75058" size={20} />
                    ) : (
                      <AntDesign name="heart" color="#B6B8C7" size={15} />
                    )}
                  </ProductHeader>
                  <ProductPicture>
                    <View style={ProductPictureStyles.border}>
                      <View style={ProductPictureStyles.circle}>
                        <Image
                          source={element.imageSrc}
                          style={ProductPictureStyles.image}
                        />
                      </View>
                    </View>
                  </ProductPicture>
                  <ProductName>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.name}
                    </Text>
                  </ProductName>
                  <ProductPrice>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.price}
                    </Text>
                  </ProductPrice>
                  {renderProductRating(element.rating)}
                </ProductCard>
              ))}
            </Section5>
          ) : (
            <Section5 style={{paddingLeft: 0, paddingRight: 0}}>
              {Products.map(element => (
                <ProductCard
                  key={element.id}
                  onPress={() =>
                    navigation.navigate('Product', {
                      productID: element.id,
                    })
                  }>
                  <ProductHeader>
                    {element.discount === 'none' ? (
                      <DiscountLabel style={{backgroundColor: '#fff'}} />
                    ) : (
                      <DiscountLabel>
                        <Text size={13} weight="bold">
                          {element.discount}
                        </Text>
                      </DiscountLabel>
                    )}
                    {element.favourite === 'yes' ? (
                      <Ionicons name="heart-circle" color="#F75058" size={20} />
                    ) : (
                      <AntDesign name="heart" color="#B6B8C7" size={15} />
                    )}
                  </ProductHeader>
                  <ProductPicture>
                    <View style={ProductPictureStyles.border}>
                      <View style={ProductPictureStyles.circle}>
                        <Image
                          source={element.imageSrc}
                          style={ProductPictureStyles.image}
                        />
                      </View>
                    </View>
                  </ProductPicture>
                  <ProductName>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.name}
                    </Text>
                  </ProductName>
                  <ProductPrice>
                    <Text
                      color="#3D44AA"
                      size={(screenWidth / 380) * 18}
                      weight="bold">
                      {element.price}
                    </Text>
                  </ProductPrice>
                  {renderProductRating(element.rating)}
                </ProductCard>
              ))}
            </Section5>
          )}
        </ScrollView>
      </Section5>
    </View>
  );
};

export default Home;
