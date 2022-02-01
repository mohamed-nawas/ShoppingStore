import React from 'react';
import {Image, View} from 'react-native';
import {
  ProfileCircle,
  ProfileInnerBorder,
  ProfileOuterBorder,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
} from '../styles/Profile-style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <Section1>
        <Text color="#000000" weight="bold">
          Profile
        </Text>
      </Section1>
      <Section2>
        <View
          style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <ProfileOuterBorder>
            <ProfileInnerBorder>
              <ProfileCircle style={{overflow: 'hidden'}}>
                <Image
                  source={require('../images/profile_image.png')}
                  style={{width: '130%', height: '130%', resizeMode: 'contain'}}
                />
              </ProfileCircle>
            </ProfileInnerBorder>
          </ProfileOuterBorder>
        </View>
        <Text weight="bold" color="#0a0d23">
          Mohamed Nawaz
        </Text>
      </Section2>
      <Section3>
        <Section4>
          <Section5>
            <Feather
              name="edit"
              size={25}
              color="#9894ae"
              style={{marginRight: 20}}
            />
            <Text
              weight="bold"
              style={{marginRight: 130}}
              color="#9894ae"
              size={18}>
              Edit Profile
            </Text>
          </Section5>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={35}
            color="#9894ae"
          />
        </Section4>
        <Section4>
          <Section5>
            <Ionicons
              name="location"
              size={30}
              color="#9894ae"
              style={{marginRight: 20}}
            />
            <Text
              weight="bold"
              style={{marginRight: 60}}
              color="#9894ae"
              size={18}>
              Shopping Address
            </Text>
          </Section5>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={35}
            color="#9894ae"
          />
        </Section4>
        <Section4>
          <Section5>
            <AntDesign
              name="heart"
              size={25}
              color="#9894ae"
              style={{marginRight: 20}}
            />
            <Text
              weight="bold"
              style={{marginRight: 160}}
              color="#9894ae"
              size={18}>
              Wishlist
            </Text>
          </Section5>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={35}
            color="#9894ae"
          />
        </Section4>
        <Section4>
          <Section5>
            <FontAwesome5
              name="clipboard-list"
              size={25}
              color="#9894ae"
              style={{marginRight: 20}}
            />
            <Text
              weight="bold"
              style={{marginRight: 115}}
              color="#9894ae"
              size={18}>
              Order History
            </Text>
          </Section5>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={35}
            color="#9894ae"
          />
        </Section4>
      </Section3>
    </View>
  );
};

export default Profile;
